import React, { Component } from "react";
import minus_sign from "./images/icons/minus_sign.png";
import play from "./images/icons/play.png";
import pause from "./images/icons/pause.png";

export const Playing = props => {
  let displayPlaying = <div className="playing" />;
  let masterControls = <div />;
  let anyPlaying = false;
  let playButton = props.playing;

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
      </div>
    ));
    masterControls = (
      <div className="masterControlsContainer">
        <div className="masterControls">
          <img
            src={playButton ? pause : play}
            id="pButton"
            className="play"
            onClick={props.clickMasterPlayButton}
          />
          <div className="slidecontainer">
            <input
              type="range"
              min="0"
              max="100"
              value={props.volume}
              onChange={props.handleVolumeChange}
              className="slider"
              id="myRange"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="playing">
      {displayPlaying}
      {masterControls}
    </div>
  );
};
