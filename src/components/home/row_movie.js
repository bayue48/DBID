import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import ScrollContainer from "react-indiana-drag-scroll";
import { Link } from "react-router-dom";
import "./row.css";

const image = "https://image.tmdb.org/t/p/w500/";

function Row({ title, getData, isLargeRow }) {
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
    <div className="row">
      <h2>{title}</h2>
      <ScrollContainer className="row-posters">
        {movies.map((movie) => (
          // <Link
          //   to={{
          //     pathname: `/browse/${movie.id}`,
          //     state: {movie}
          //   }}
          // >
          <img
            key={movie.id}
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            src={`${image}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
           // <Link />
        ))}
      </ScrollContainer>
    </div>
  );
}

export default Row;
