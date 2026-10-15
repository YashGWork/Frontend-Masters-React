import React from "react";

export default function Searchbar(props) {
  return (
    <div className="searchContainer">
      <i className="fa-solid fa-magnifying-glass" />
      <input
        type="text"
        className="searchInput"
        placeholder="Search for a country"
        onChange={(event) => {
            console.log(event);
          props.updateQuery(event.target.value.toLowerCase());
        }}
      />
    </div>
  );
}
