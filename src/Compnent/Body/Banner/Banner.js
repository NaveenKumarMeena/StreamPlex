import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "../../../axios";
import requests from "../../../Request";
const base_Url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      //   Math.Floor(Math.random() * request.data.result.length-1)
      // It will Randomly select a poster
      return request;
    }
    fetchData();
  }, []);
  console.log(movie.backdrop_path);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_Url + movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-container">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
      </div>
    </header>
  );
}

export default Banner;
