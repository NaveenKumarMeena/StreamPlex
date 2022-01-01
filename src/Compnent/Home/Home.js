import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import Row from "../Body/Row/Row";
import Header from "../Header/Header";
import requests from "../../Request";
import "./home.css";
import Slider2 from "../Body/Slider/Slider2.0";
import Column from "../Body/Column/Column";

function Home() {
  return (
    <div className="home-container">
      <Header />

      <Slider2 />
      <Row
        title="Netflix Original"
        fetchUrl={requests.fetchNetflixOriginal}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <div className="column">
        <Column title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Column title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Column title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      </div>
    </div>
  );
}

export default Home;
