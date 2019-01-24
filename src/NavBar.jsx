import React, { Component } from "react";
import whole_ship from "./assets/wholeshipdarker.png";

export const NavBar = props => {
  let NavBarVisual = (
    <nav>
      <img className="mokita-logo" src={whole_ship} alt="Mokita logo" />
      <h1>Mokita</h1>
      <div className="login">Login</div>
      <div className="tabs">
        <p>Home</p>
        <p>Invest</p>
        <p>Something</p>
      </div>
    </nav>
  );
  return NavBarVisual;
};
