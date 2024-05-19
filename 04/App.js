import React from "react";
import ReactDOM from "react-dom/client";
import jsonData from "./data.json";

const data = jsonData;

const Header = () => {
  return (
    <div className='header'>
      <img
        className='logo'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUNk60rx2n09kUBKebggj-b5Lxl7hD9kVT3GLKHAREszct7mWarlaPHT4OjaKN7Im9G0&usqp=CAU'></img>
      <ol>
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </ol>
    </div>
  );
};
const RestroCard = (props) => {
  const { resData } = props;
  const{name, cuisine, locality, rating, costText} = resData?.info
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
const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        {data.map((resData) => (
          <RestroCard key= {resData.info.resId} resData={resData} />
        ))}
      </div>
    </div>
  );
};
const App = () => {
  return (
    <div className='App'>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
