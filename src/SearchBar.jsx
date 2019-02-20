import React, { Component } from "react";

export const SearchBar = props => {
  let displaySearchBar = (
    <input className="searchBar" onChange={evt => props.onEntry(evt)} />
  );
  return displaySearchBar;
};
