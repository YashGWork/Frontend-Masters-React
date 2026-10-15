import React from "react";
import image from "../assets/images/Default.png"
import {Link} from 'react-router-dom'

export default function Cards(props) {
  let country = props?.data;
  const key = props?.index;
  const href = country?.names?.common?? 'Unavailable';
  const countryFlag = country?.flag?.url_svg ?? image;
  const countryName = country?.names?.common ?? 'Unavailable';
  const population = country?.population.toLocaleString("en-IN") ?? 'Unavailable';
  const region = country?.region ?? 'Unavailable';
  const capitals = country?.capitals?.[0]?.name ?? 'Unavailable';
  return (
    <Link
      className="countryCard"
      to={`/${href}`}
    >
      <img
        src={countryFlag}
        loading="lazy"
        alt={`${href} flag`}
      />
      <div className="cardContent">
        <h3 className="countryName">
          {countryName}
        </h3>
        <p>
          <b>Population: </b>
          {population}
        </p>
        <p>
          <b>Region: </b>{region}
        </p>
        <p>
          <b>Capital: </b>{capitals}
        </p>
      </div>
    </Link>
  );
}
