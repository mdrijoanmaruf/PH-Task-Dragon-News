import React from "react";
import LogoBar from "../Header/LogoBar";
import MarqueeItem from "../Header/MarqueeItem";
import NavBar from "../Header/NavBar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <LogoBar></LogoBar>
    <Outlet></Outlet>
    </div>
  );
};

export default Root;
