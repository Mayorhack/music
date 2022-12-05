import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Player from "./Player";
import Sidebar from "./Sidebar";
import bgImage from "../assets/bgimage.png";

const Layout = () => {
  const location = useLocation();
  return (
    <div
      className="layout"
      style={
        location.pathname.includes("album")
          ? { backgroundImage: `url(${bgImage})` }
          : { fontStyle: "normal" }
      }
    >
      <Sidebar />
      <Outlet />
      <Player />
    </div>
  );
};

export default Layout;
