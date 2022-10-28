import React from "react";
import cl from "./TopNavbar.module.scss";

const TopNavbar = ({ toggleSideBar }) => {
  return (
    <nav className={cl.navbar}>
      <button onClick={toggleSideBar}>Toggle sidebar</button>
      <p>Top navbar</p>
    </nav>
  );
};

export default TopNavbar;
