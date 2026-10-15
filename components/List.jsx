import React from "react";
import Card from "./Card";
import ListShimmer from "./ListShimmer";
import CountryData from "../CountryData";

export default function Countries(props) {
  if (CountryData?.data?.objectslength == 0) return <ListShimmer />;
  const countryList = CountryData?.data?.objects
    .filter((country) => {
      if(props.searchQuery === 'all') return country;
      return country?.names?.common.toLowerCase().includes(props.searchQuery)||country?.region.toLowerCase().includes(props.searchQuery);
    })
    .map((country, index) => {
      if (country?.names?.common === "Abkhazia") return;
      return <Card key={country?.names?.common??index} data={country} />;
    });

  return <div className="resultsContainer">{countryList}</div>;
}
