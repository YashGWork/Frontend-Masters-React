import React from "react";
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className="navContainer">
      <div className="navContent">
        <h1 className="title"><Link to='/'>Where in the world?</Link></h1>
        {/* <p className="themeToggler">
          <i className="fa-solid fa-moon moon"></i>
          <i className="fa-solid fa-sun sun"></i>
          Dark Mode
        </p> */}
      </div>
    </header>
  );
}
