import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Details.css";
import CountryData from "../CountryData";
import image from "../assets/images/Default.png";
import InvalidDetails from './InvalidDetails'

export default function Details() {
  const countryName = useParams()?.country.toLowerCase();
  let country = CountryData?.data?.objects.filter((country) => {
    return country?.names?.common.toLowerCase().includes(countryName);
  });

  if (country.length === 0) return <InvalidDetails/>

  const countryFlag = country[0]?.flag?.url_svg ?? image;
  const Name = country[0]?.names?.common ?? "Country name currently unavailable";
  const population =
    country[0]?.population.toLocaleString("en-IN") ?? "Population currently unavailable";
  const region = country[0]?.region ?? "Region currently unavailable";
  let subregion = country[0]?.subregion ?? "Subregion currently unavailable";
  if(subregion==='') subregion = "Subregion currently unavailable";
  const capital = country[0]?.capitals?.[0]?.name ?? "Capital currently unavailable";
  const tld = country[0]?.tlds[0] ?? "Tlds  currently unavailable";
  let currencies = country[0]?.currencies
    .map((currency) => currency?.name)
    .join(", ");
  if(currencies.length === 0) currencies = "Currencies unavailable";
  let language = country[0]?.languages
    .map((language) => language.name)
    .join(", ");
   if(language.length === 0) language = "Language unavailable";
  return (
    <main>
      <div className="detailsContainer">
        <Link className="backButton" to="/">
          <i className="fa-solid fa-arrow-left" />
          &nbsp; Back
        </Link>
        <div className="countryDetails">
          <div className="flagContainer">
            <img src={countryFlag} alt={Name} className="flagImage" />
          </div>
          <div className="textContainer">
            <h1 className="countryName" />
            <div className="detailsText">
              <p>
                <b>Native Name: </b>
                <span className="nativeName">{Name}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">{population}</span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region">{region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="subRegion">{subregion}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital">{capital}</span>
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="levelDomain">{tld}</span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies">{currencies}</span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages">{language}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
