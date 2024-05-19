import { useState } from "react";
import resList from "../utils/mock_data";
import RestroCard from "./RestroCard";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);
  const [showTopRated, setShowTopRated] = useState(false);

  const toggleTopRated = () => {
    if (showTopRated) {
      setListOfRes(resList); // Show all restaurants
    } else {
      const filteredList = resList.filter(
        (res) => res.info.rating.aggregate_rating > 4
      );
      setListOfRes(filteredList); // Show top-rated restaurants
    }
    setShowTopRated(!showTopRated); // Toggle state
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
