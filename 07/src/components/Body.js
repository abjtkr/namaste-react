import { useState, useEffect } from "react";
import RestroCard from "./RestroCard";
import { MENU_API } from "../utils/constants";
const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [showTopRated, setShowTopRated] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(MENU_API);
      const data = await response.json();

      const filteredList = data.data.cards
        .filter((obj) => obj.card.card && obj.card.card.info)
        .map((obj) => obj.card.card.info);


      setListOfRes(filteredList || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const toggleTopRated = () => {
    if (showTopRated) {
      fetchData();
    } else {
      const filteredList = listOfRes.filter((res) => res.avgRatingString > 4.5);
      setListOfRes(filteredList);
    }
    setShowTopRated(!showTopRated);
  };
  console.log("try")
  const ShimmerEffect = () => {
    return (
      <div className='shimmer-container'>
        <div className='shimmer'></div>
      </div>
    );
  };
  const loadUi = () => {
    if (listOfRes.length === 0) {
      return (
        <div className='res-container'>
          {[...Array(8)].map((_, index) => (
            <div key={index} className='skeleton-card'>
              <ShimmerEffect />
            </div>
          ))}
        </div>
      );
    }

    return listOfRes.filter((res) =>
      res.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).map((resData) => (
      <RestroCard key={resData.id} resData={resData} />
    ));
  };

  return (
    <div className='body'>
      <div className='filter'>
        <input type='text' className='search' placeholder='Search...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
        <button
          className='search-btn'
          onClick={() => console.log("Search clicked")}>
          Search
        </button>
        <button
          className={`filter-btn ${showTopRated ? "active" : ""}`}
          onClick={toggleTopRated}>
          {showTopRated
            ? "Show All Restaurants"
            : "Filter Top Rated Restaurants"}
        </button>
      </div>
      <div className='res-container'>{loadUi()}</div>
    </div>
  );
};

export default Body;
