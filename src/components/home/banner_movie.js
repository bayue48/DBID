import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import requests from "../../utils/request";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await api.get(requests.getTopRatedMovie);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">{movie?.title}</h1>

        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">MyList</button>

          <h1 className="banner-description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Banner;
