import React from "react";
import { Link } from "react-router-dom";
import HeaderCard from "../HeaderCard";
import image from "../../images/latest-work1.png";

const LatestWorkCard = () => {
  return (
    <HeaderCard className="latest-work" header="Latest Work">
      <h2 className="card-title">Dance</h2>
      <p className="card-subtitle">
        An e-bike subscription with a positive impact on health and livable
        cities.
      </p>
      <Link to="/work">
        <div className="card-img-container">
          <img className="card-img" alt="bike" src={image} />
        </div>
      </Link>
      <Link to="/work" className="card-link">
        {">"}
      </Link>
    </HeaderCard>
  );
};

export default LatestWorkCard;
