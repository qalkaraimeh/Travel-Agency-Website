import React from "react";
import "./CardItem.css";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import ChichenItza from "../Pages/ChichenItza";

const CardItem = ({ cardTitle, cardSize, linkPath, imgSrc, imgAlt }) => {
  const SIZES = ["card-large", "card-small"];
  return (
    <div className={`cards-style cards mb-5 ${cardSize}`}>
      <Link to={`/${linkPath}`} style={{ display: "inline-block" }}>
        <img src={imgSrc} alt={imgAlt} className="cards-img" />
        <h5 className="card-title">{cardTitle}</h5>
      </Link>
      {/* <Route path={`/${linkPath}`} element={<ChichenItza />}>
        <img src={imgSrc} alt={imgAlt} className="cards-img" />
        <h5 className="card-title">{cardTitle}</h5>
      </Route> */}
    </div>
  );
};

export default CardItem;
