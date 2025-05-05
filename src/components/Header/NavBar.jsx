import React from "react";
import { NavLink } from "react-router";
import './Nav.css'
const NavBar = () => {
  return (
    <div className="my-4 grid md:grid-cols-3 grid-cols-2 items-center">
      <div className="hidden md:block"></div>
      <div className="flex items-center gap-4 justify-center text-dark3 font-[500] ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-4 items-center justify-end">
        <div>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
              <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
            </div>
          </div>
        </div>
        <div className="px-4 py-2 bg-dark1 text-white font-[600]">Login</div>
      </div>
    </div>
  );
};

export default NavBar;
