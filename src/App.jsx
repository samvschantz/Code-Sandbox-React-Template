import React, { Component } from "react";
import { Tiles } from "./Tiles";
import { SearchBar } from "./SearchBar";
import { Playing } from "./Playing";
import TileData from "./JSONdata/soundTiles.json";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soundTiles: TileData,
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
    if (newTileObj.playing === true) {
      let audLink = require(`./sounds/${newTileObj.name}.mp3`);
      let aud = new Audio(audLink);
      let id = `audio${newTileObj.name}`;
      aud.setAttribute("id", id);
      document.getElementById("root").append(aud);
      aud.play();
      this.setState({ playingTiles: [...currentPlayingTiles, newTileObj] });
    } else if (newTileObj.playing === false) {
      let el = document.getElementById(`audio${newTileObj.name}`);
      el.parentNode.removeChild(el);
      let removeOldTile = this.state.playingTiles.filter(
        tile => tile.name !== newTileObj.name
      );
      this.setState({ playingTiles: removeOldTile });
    }

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
        <Playing
          soundTiles={this.state.soundTiles}
          playingTiles={this.state.playingTiles}
          togglePlaying={this.togglePlaying}
        />
      </div>
    );
  }
}
