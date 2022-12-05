import React from "react";
import { BiSearch } from "react-icons/bi";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <input type="text" name="search" id="" />
      <div className="search_placeholder">
        <BiSearch /> Search
      </div>
    </div>
  );
};

export default Searchbar;
