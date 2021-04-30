import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import { image } from "../../utils/secret"
import ScrollContainer from "react-indiana-drag-scroll";
import { useHistory } from "react-router-dom";
import "./row.css";

function Row({ title, getData, isLargeRow }) {
  const history = useHistory();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await api.get(getData);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [getData]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <ScrollContainer className="row-posters">
        {movies.map((movie) => (
          <img
            onClick={() => {
              history.push({
                pathname: `/browse/${movie.id}`,
                state: { movie },
              });
            }}
            key={movie.id}
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            src={`${image}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie?.title || movie?.name || movie?.original_name}
          />
        ))}
      </ScrollContainer>
    </div>
  );
}

export default Row;
