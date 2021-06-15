import React from "react";
import Search from "../SearchForm/SearchForm";

import "./Navbar.scss";

const Navbar = ({ handleSearch, searchVal }) => {
  return (
    <div className="navbar">
      <a className="navbar__homeLink" href="#home">
        TasteBuddy
      </a>
      <div className="navar__search">
        <Search handleSearch={handleSearch} searchVal={searchVal} />
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
