import React from "react";
import Filter from "./Filter";
import Searchbar from "./Searchbar";

export default function Main(props) {
  return (
      <main>
        <div className="filterContainer">
          <Searchbar key="2" updateQuery={props.updateQuery} />
          <Filter key="3" updateQuery={props.updateQuery} />
        </div>
      </main>
  );
}
