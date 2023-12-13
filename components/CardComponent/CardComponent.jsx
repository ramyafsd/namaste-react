import React from "react";
import "./CardStyles.css";
import RestuarantsData from "../../public/assets/util/RestuarantsData.json";

const CardComponent = (props) => {
  const data = RestuarantsData.restaurants;
  return (
    <div className="card-container">
      {data.map((restuarant) => (
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
  );
};

export default CardComponent;
