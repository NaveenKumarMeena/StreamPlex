import React, { useEffect, useState } from "react";
import axios from "../../../axios";
import "./row.css";

const base_Url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="row">
      <h2 style={{ color: "white", marginLeft: "20px" }}>{title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`poster ${isLargeRow && "large-poster"}`}
            src={`${base_Url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
