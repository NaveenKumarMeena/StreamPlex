import React, { useState, useEffect } from "react";
import axios from "../../../axios";
import "./column.css";

const base_Url = "https://image.tmdb.org/t/p/original/";

function Column({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [isadult, setIsAdult] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  function adult(is) {
    setIsAdult(is);
  }
  return (
    <div className="column-container">
      <h3>{title}</h3>
      <div className="movie-detail">
        {movies.map((movie) => (
          <div
            className="column-posters"
            key={movie.id}
            onLoad={() => adult(movie.adult)}
          >
            <img
              src={base_Url + movie.poster_path}
              alt=""
              className="column-poster"
            />
            <div className="poster-details">
              <h4 className="column-title">
                {movie.name || movie.original_title}
              </h4>
              <p className="column-overview">{`${movie.release_date} | ${
                movie.vote_average
              } | ${isadult ? "TV-MA" : "TV-16"}`}</p>
              {console.log(isadult)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Column;
