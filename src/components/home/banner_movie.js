import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import requests from "../../utils/request";
import { useHistory } from "react-router-dom";
import "./banner.css";
import ModalVideo from "react-modal-video";
import movieTrailer from "movie-trailer";

function Banner() {
  const history = useHistory();
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await api.get(requests.getNewMovie);
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

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
      setOpen(true);
    }
  };

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
          <button className="banner-button" onClick={() => handleClick(movie)}>
            Trailer
          </button>
          <button
            onClick={() => {
              history.push({
                pathname: `/browse/${movie.id}`,
                state: { movie },
              });
            }}
            className="banner-button"
          >
            Detail
          </button>

          <h1 className="banner-description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </div>
      {trailerUrl && (
        <ModalVideo
          channel="youtube"
          autoplay
          youtube={{ mute: 1, autoplay: 1 }}
          isOpen={isOpen}
          videoId={trailerUrl}
          onClose={() => setOpen(false)}
        />
      )}
      <div className="banner-fadebottom" />
    </header>
  );
}

export default Banner;
