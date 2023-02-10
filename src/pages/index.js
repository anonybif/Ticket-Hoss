import React, { useState } from "react";
import "../styles/global.css";
import Navbar from "../components/navbar";
import { MdFilterAlt } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import Filter from "../components/Filter";
import DownloadApp from "../components/DownloadApp";
import Carousel from "../components/carousel";

export default function Home() {
  const [OpenFilter, setOpenFilter] = useState(false);
  const [OpenDownloadApp, setOpenDownloadApp] = useState(false);
  return (
    <>
      <Navbar />
      {/* <Carousel /> */}
      <div className="home">
        <div className="search-container">
          <div className="search">
            <div className="searchBar">
              <input type="text" placeholder="Search Tracks" />
              <Button>Search</Button>
            </div>
            <a className="filterBtn" onClick={() => {
              setOpenFilter(true);
            }} >
              <MdFilterAlt />
            </a>
          </div>
          {OpenFilter && <Filter setOpenFilter={setOpenFilter} />}
        </div>
        <Button className="downloadBtn" onClick={() => {
          setOpenDownloadApp(true);
        }} >Download
        </Button>
        {OpenDownloadApp && <DownloadApp setOpenDownloadApp={setOpenDownloadApp} />}
        <div className="body"></div>
      </div>

    </>
  )
}
