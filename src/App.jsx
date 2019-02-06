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

    this.togglePlaying = this.togglePlaying.bind(this);
  }

  togglePlaying(tileName) {
    let newTileObj = {};
    this.state.soundTiles.forEach(function(tile) {
      if (tileName === tile.name) {
        newTileObj = tile;
      }
    });

    newTileObj.playing = newTileObj.playing === true ? false : true;

    let removeOldTile = this.state.soundTiles.filter(
      tile => tile.name !== newTileObj.name
    );
    this.setState({ links: [...removeOldTile, newTileObj] });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <Tiles
          togglePlaying={this.togglePlaying}
          soundTiles={this.state.soundTiles}
        />
        <Playing soundTiles={this.state.soundTiles} />
      </div>
    );
  }
}
