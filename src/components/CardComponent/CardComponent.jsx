import React, { useState } from "react";
import "./CardStyles.css";
import RestuarantsData from "../../config/RestuarantsData.json";
import SearchComponent from "../SearchComponent";

const CardComponent = (props) => {
  const data = RestuarantsData.restaurants;
  const [listOfRestuarants, setListOfRestuarants] = useState(data);
  let searchValue = "";
  const handleSearch = (value) => {
    searchValue = value;
    console.log(listOfRestuarants);
    const filteredList = data.filter((res) => {
      if (searchValue === "") {
        return res;
      } else {
        return res.info.name.toLowerCase().includes(searchValue);
      }
    });
    setListOfRestuarants(filteredList);
  };
  return (
    <>
      <SearchComponent handleSearch={handleSearch} />
      <div className="card-container">
        {listOfRestuarants.map((restuarant) => (
          <div className="card">
            <div className="resimage">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restuarant.info.cloudinaryImageId}`}
              />
            </div>
            <div className="res-name">{restuarant.info.name}</div>
            <div className="res-ratig">
              <div>Rating:{restuarant.info.avgRating}</div>
              <div>{restuarant.info.sla.deliveryTime.toFixed(0)} mins</div>
            </div>
            <div>{restuarant.info.cuisines.join(",")}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardComponent;
