import React from "react";
import { Link } from "react-router-dom";
import Search from "../SearchForm/SearchForm";

import "./Navbar.scss";

const Navbar = ({ handleSearch, searchVal }) => {
  return (
    <div className="navbar">
      <Link className="navbar__homeLink" to="/">
        TasteBuddy
      </Link>
      <div className="navar__search">
        <Search handleSearch={handleSearch} searchVal={searchVal} />
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
