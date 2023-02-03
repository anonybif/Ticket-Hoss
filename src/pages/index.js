import * as React from "react";
import "../styles/global.css";
import Navbar from "../components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faFilterCircleDollar, faFilterCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="header"></div>
        <div className="search">
          <div className="searchBar">
            <input type="text" placeholder="Search Tracks" />
            <button>Search</button>
          </div>
          <span className="filterBtn"><FontAwesomeIcon icon={faFilter}></FontAwesomeIcon></span>
        </div>
      </div>
    </>
  )
}
