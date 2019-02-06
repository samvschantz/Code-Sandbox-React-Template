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
      playingTiles: []
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

    //toggle whether or not tile is contained in playingTiles here
    let currentPlayingTiles = this.state.playingTiles;

    this.state.playingTiles.forEach(function(tile) {
      if (newTileObj.name === tile && newTileObj.playing === true) {
        this.setState({ playingTiles: [...currentPlayingTiles, newTileObj] });
      }
    });

    let removeOldTile = this.state.soundTiles.filter(
      tile => tile.name !== newTileObj.name
    );
    this.setState({ soundTiles: [...removeOldTile, newTileObj] });
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
