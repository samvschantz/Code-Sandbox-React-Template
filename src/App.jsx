import React, { Component } from "react";
import { Tiles } from "./Tiles";
import { SearchBar } from "./SearchBar";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <SearchBar />;
  }
}
