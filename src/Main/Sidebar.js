import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css"

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/sobre">
      Sobre
      </a>

      <a className="menu-item" href="/Login">
        Login
      </a>

      <a className="menu-item" href="/manifesto">
        Manifesto
      </a>
    </Menu>
  );
};