import { useState, useEffect } from "react";
import RestroCard from "./RestroCard";
import { MENU_API } from "../utils/constants";
const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [showTopRated, setShowTopRated] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(MENU_API);
      const data = await response.json();
      console.log(data.data.cards[1].card.card);
      const resData =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log(resData);
      setListOfRes(resData || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const toggleTopRated = () => {
    if (showTopRated) {
      fetchData(); // Reload all restaurants
    } else {
      const filteredList = listOfRes.filter(
        (res) => res.info.avgRatingString > 4
      );
      setListOfRes(filteredList);
    }
    setShowTopRated(!showTopRated);
  };

  return (
    <div className='body'>
      <div className='filter'>
        <button
          className={`filter-btn ${showTopRated ? "active" : ""}`}
          onClick={toggleTopRated}>
          {showTopRated
            ? "Show All Restaurants"
            : "Filter Top Rated Restaurants"}
        </button>
      </div>
      <div className='res-container'>
        {listOfRes.map((resData) => (
          <RestroCard key={resData.info.resId} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
