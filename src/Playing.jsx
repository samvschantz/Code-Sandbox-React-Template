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

  if (anyPlaying === false) {
    displayPlaying = (
      <div className="clickToAdd">Click + icon to add sounds</div>
    );
  } else {
    displayPlaying = props.playingTiles.map((tile, i) => (
      <div className="playingTile" key={i}>
        <img
          className="playingTilePic"
          src={require(`./images/${tile.name}.${tile.picFormat}`)}
        />
        <img
          className="removeFromPlaying"
          src={minus_sign}
          onClick={() => props.togglePlaying(tile.name)}
        />
        <p>
          {tile.name} + {tile.soundFormat}
        </p>
      </div>
    ));
  }

  return <div className="playing">{displayPlaying}</div>;
};
