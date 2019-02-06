import React, { Component } from "react";
import { Tiles } from "./Tiles";
import { SearchBar } from "./SearchBar";
import { Playing } from "./Playing";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soundTiles: [
        {
          name: "campfire",
          soundFormat: "mp3",
          picFormat: "jpg",
          playing: false
        },
        {
          name: "forest",
          soundFormat: "mp3",
          picFormat: "jpg",
          playing: false
        },
        {
          name: "waves",
          soundFormat: "mp3",
          picFormat: "jpg",
          playing: false
        },
        {
          name: "waterfall",
          soundFormat: "mp3",
          picFormat: "jpg",
          playing: false
        }
      ],
      playingSounds: []
    };
  }
  render() {
    return (
      <div>
        <SearchBar />
        <Tiles soundTiles={this.state.soundTiles} />
        <Playing playingSounds={this.state.playingSounds} />
      </div>
    );
  }
}
