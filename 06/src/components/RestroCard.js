import { CDN_URL } from "../utils/constants";
const RestroCard = (props) => {
  const { resData } = props;
  const {
    name,
    cloudinaryImageId,
    avgRatingString,
    totalRatingsString,
    cuisines,
    costForTwo,
    locality,
    areaName,
  } = resData;
  return (
    <div className='restroCard'>
      <img className='res-card' src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        {" "}
        {avgRatingString} stars , {totalRatingsString} ratings
      </h4>
      <h4>{locality.name}</h4>
      <h4>
        {locality} {areaName}
      </h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
export default RestroCard;
