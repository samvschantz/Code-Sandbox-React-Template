import React, { Component } from "react";

export const Playing = props => {
  let displayPlaying = <div className="playing" />;
  if (props.chosenSounds.length === 0) {
    displayPlaying = (
      <div className="playing">
        <div className="clickToAdd">Click + icon to add sounds</div>
      </div>
    );
  }
  return displayPlaying;
};
