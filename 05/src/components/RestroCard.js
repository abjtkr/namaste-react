const RestroCard = (props) => {
  const { resData } = props;
  const { name, cuisine, locality, rating, costText } = resData?.info;
  return (
    <div className='restroCard'>
      <img className='res-card' src={resData.info.image.url}></img>
      <h3>{name}</h3>
      <h4>
        {cuisine.map((cusine) => (
          <span key={cusine.deeplink}>{cusine.name}, </span>
        ))}
      </h4>
      <h4>{locality.name}</h4>
      <h4>{locality.address}</h4>
      <h4>{rating.aggregate_rating}</h4>
      <h4>{costText.text}</h4>
      <h4>{resData.order.deliveryTime}</h4>
    </div>
  );
};
export default RestroCard;
