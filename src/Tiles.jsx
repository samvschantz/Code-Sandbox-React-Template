import React, { Component } from "react";
import plus_sign from "./images/icons/plus_sign.png";
import minus_sign from "./images/icons/minus_sign.png";

export const Tiles = props => {
  let displayTiles = <p>Tiles</p>;
  if (props.soundTiles.length !== 0) {
    displayTiles = props.soundTiles.map((tile, i) => (
      <div className="tile" key={i}>
        <img
          className="tilePic"
          src={require(`./images/${tile.name}.${tile.picFormat}`)}
        />
        <p className="tileName">{tile.name}</p>
        <img
          className="addToPlaying"
          src={tile.playing ? minus_sign : plus_sign}
          onClick={() => props.togglePlaying(tile.name)}
        />
      </div>
    ));
  }
  return <div className="displayedTiles">{displayTiles}</div>;
};
