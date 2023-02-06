import React, { useState } from "react";
import "../styles/global.css";
import Navbar from "../components/navbar";
import { MdFilterAlt } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import Filter from "../components/Filter";

export default function Home() {
  const [Open, setOpen] = useState(false);
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="search-container">
          <div className="search">
            <div className="searchBar">
              <input type="text" placeholder="Search Tracks" />
              <Button>Search</Button>
            </div>
            <a className="filterBtn" onClick={() => {
              setOpen(true);
            }} >
              <MdFilterAlt />
            </a>
          </div>
          {Open && <Filter setOpen={setOpen} />}
        </div>
        <div className="body"></div>
      </div>

    </>
  )
}
