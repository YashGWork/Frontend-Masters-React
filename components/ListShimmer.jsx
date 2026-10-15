import React from "react";
import Card from "./Card";
import CountryData from "../CountryData";

export default function ListShimmer(props) {
  const shimmerCount = 15;
  const skeletonArray = Array.from({ length: shimmerCount });

  return (
    <div className="resultsContainer">
      {skeletonArray.map((_, index) => (
        <a key={index} href="#" className="countryCard shimmerCard">
          <div
            style={{ height: "140px", backgroundColor: "rgb(211, 211, 211)" }}
          ></div>
          <div className="cardContent">
            <h3 className="countryName">CountryName</h3>
            <p>
              <b>Population Population</b>
            </p>
            <p>
              <b>Regions Regions</b>
            </p>
            <p>
              <b>Capital Capital</b>
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
