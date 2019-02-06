import React, { Component } from "react";
import { Tiles } from "./Tiles";
import { SearchBar } from "./SearchBar";
import { Playing } from "./Playing";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenSounds: []
    };
  }
  render() {
    return (
      <div>
        <SearchBar />
        <Playing chosenSounds={this.state.chosenSounds} />
      </div>
    );
  }
}
