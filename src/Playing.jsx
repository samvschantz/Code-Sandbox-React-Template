import React, { Component } from "react";
import minus_sign from "./images/icons/minus_sign.png";

export const Playing = props => {
  let displayPlaying = <div className="playing" />;
  let anyPlaying = false;
  props.soundTiles.forEach(function(tile) {
    if (tile.playing === true) {
      anyPlaying = true;
    }
  });
  console.log("get here?");
  console.log(anyPlaying);
  if (anyPlaying === false) {
    displayPlaying = (
      <div className="clickToAdd">Click + icon or drag to add sounds</div>
    );
  } else {
    displayPlaying = props.playingTiles.map((tile, i) => (
      <div className="playingTile" key={i}>
        <img
          className="playingTilePic"
          src={require(`./images/${tile.name}.${tile.picFormat}`)}
        />
        <p className="playingTileName">{tile.name}</p>
        <img
          className="addToPlaying"
          src={minus_sign}
          onClick={() => props.togglePlaying(tile.name)}
        />
      </div>
    ));
  }

  return <div className="playing">{displayPlaying}</div>;
};
