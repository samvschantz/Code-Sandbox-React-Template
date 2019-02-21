import React, { Component } from "react";
import { Tiles } from "./Tiles";
import { SearchBar } from "./SearchBar";
import { Playing } from "./Playing";
import TileData from "./JSONdata/soundTiles.json";
import {
  checkSameObject,
  checkSameObjectArray
} from "./myInternalLibraries/object";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      soundTiles: TileData,
      playingTiles: []
    };

    this.togglePlaying = this.togglePlaying.bind(this);
    this.onEntry = this.onEntry.bind(this);
    this.clickMasterPlayButton = this.clickMasterPlayButton.bind(this);
  }

  onEntry(entry) {
    let input = entry.target.value;
    this.reorderTiles(input);
  }

  reorderTiles(criteria) {
    let newOrder = [];
    let removalArray = [];
    let soundTilesArray = [...this.state.soundTiles];
    let oldOrder = [...this.state.soundTiles];
    soundTilesArray.forEach(function(soundTile, index) {
      let soundTilesArrayIndex = index;
      //loop through tags on each tile
      soundTile.tags.forEach(function(tag) {
        let criteriaLength = criteria.length;
        let tagSlice = tag.slice(0, criteriaLength);
        //check that search so far matches same num of chars in tag
        if (criteria === tagSlice) {
          if (newOrder.length && newOrder[0].uuid !== soundTile.uuid) {
            removalArray.push(soundTilesArrayIndex);
            newOrder.unshift(soundTile);
            //if nothing in newOrder yet begin array with first result
          } else if (newOrder.length === 0) {
            removalArray.push(soundTilesArrayIndex);
            newOrder = [soundTile];
          }
        }
      });
    });
    //splice out tiles that are in newOrder array
    for (let i = removalArray.length - 1; i >= 0; i--) {
      soundTilesArray.splice(removalArray[i], 1);
    }
    //check that newOrder is not just the same tiles in a diff order
    let oldOrderSlice = oldOrder.slice(0, newOrder.length);

    if (!checkSameObjectArray(newOrder, oldOrderSlice)) {
      newOrder = newOrder.concat(soundTilesArray);
      this.setState({ soundTiles: newOrder });
    }
  }

  clickMasterPlayButton() {
    let sounds = document.getElementsByTagName("AUDIO");
    let numSounds = sounds.length;
    let playing = true;
    if (sounds[0].paused) {
      playing = false;
    }
    for (let i = 0; i <= numSounds; i++) {
      if (!playing) {
        sounds[i].play();
        pButton.className = "";
        pButton.className = "play";
      } else {
        sounds[i].pause();
        pButton.className = "";
        pButton.className = "pause";
      }
    }
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
        <SearchBar onEntry={this.onEntry} />
        <Tiles
          togglePlaying={this.togglePlaying}
          soundTiles={this.state.soundTiles}
        />
        <Playing
          soundTiles={this.state.soundTiles}
          playingTiles={this.state.playingTiles}
          togglePlaying={this.togglePlaying}
          clickMasterPlayButton={this.clickMasterPlayButton}
        />
      </div>
    );
  }
}
