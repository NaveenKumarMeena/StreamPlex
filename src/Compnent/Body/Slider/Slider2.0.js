import React, { useEffect, useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import requests from "../../../Request";
import axios from "../../../axios";
import "./slider.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Slider2() {
  const [movie, setMovie] = useState([]);
  const [movie1, setMovie1] = useState([]);
  const [movie2, setMovie2] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      setMovie1(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      setMovie2(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="container-slider">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={base_url + movie.backdrop_path}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{movie.name}</h3>
            <p>{truncate(movie?.overview, 150)}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={base_url + movie1.backdrop_path}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{movie1.name}</h3>
            <p>{truncate(movie1?.overview, 150)}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={base_url + movie2.backdrop_path}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{movie2.name}</h3>
            <p>{truncate(movie2?.overview, 150)}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider2;
