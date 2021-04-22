import React, { useState, useEffect } from "react";
import api from "../../utils/api";

const image = "https://image.tmdb.org/t/p/w500/";

function Row({ title, getData }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await api.get(getData);
      setMovies(request.data.results);
      console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [getData]);

  return (
    <div>
      <h2>{title}</h2>

      <div className="movie-image">
        {movies.map((movie) => (
          <img
            src={`${image}${movie.poster_path}`}
            key={movie.id}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
