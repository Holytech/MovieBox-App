import React from "react";
import Logo from "../assets/tv.png";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import OndemandVideo from "@mui/icons-material/OndemandVideo";
import LogoutIcon from "@mui/icons-material/Logout";
import "../index.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    // <div className="w-48 border border-gray-400 rounded-r-lg h-[100vh] py-12">
      <nav className="flex flex-col items-center justify-center w-48 border border-gray-400 rounded-r-lg h-[100vh] bg-white fixed top-0 left-0 overflow-hidden z-10 py-12 gap-12">
        <Link className="w-full" to="/">
          <header className="flex items-center gap-2">
            <img
              style={{ height: "3rem", width: "3rem", marginLeft: "1rem" }}
              src={Logo}
              alt=""
            />
            <h4 className="font-bold text-lg">MovieBox</h4>
          </header>
        </Link>

        <ul className="flex flex-col w-full">
          <li className="flex items-center gap-3 hover:text-[#BE123C] text-gray-400 w-full font-bold p-6 homeIcon">
            <HomeIcon />
            <p>Home</p>
          </li>
          <li className="flex items-center gap-3 hover:text-[#BE123C] text-gray-400 w-full font-bold p-6 homeIcon">
            <OndemandVideo />
            <p>Movies</p>
          </li>
          <li className="flex items-center gap-3 hover:text-[#BE123C] text-gray-400 w-full font-bold p-6 homeIcon">
            <VideocamIcon />
            <p>TV Series</p>
          </li>
          <li className="flex items-center gap-3 hover:text-[#BE123C] text-gray-400 w-full font-bold p-6 homeIcon">
            <UpcomingIcon />
            <p>Upcoming</p>
          </li>
        </ul>
        <div className="bg-[#be123d0a] border border-[#BE123C] w-[80%] rounded-xl p-3 flex flex-col items-center">
          <p className="text-sm font-medium text-justify">
            Play more movies to earn free tickets
          </p>
          <p className="text-justify my-2" style={{ fontSize: ".7rem", width: "90%" }}>
            50k people are playing now
          </p>
          <button className="text-sm px-2 py-1 font-bold border border-[#BE123C] text-[#BE123C] bg-[#be123d1c] rounded-full my-au">
            start playing
          </button>
        </div>
        <div className="flex items-center gap-3 hover:text-[#BE123C] text-gray-400 w-full font-bold p-6 homeIcon">
          <LogoutIcon />
          <p>Log out</p>
        </div>
      </nav>
    // </div>
  );
}

export default NavBar;
