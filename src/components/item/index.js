import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import api from "../../utils/api";
import { KEY, image } from "../../utils/secret";
import "./item.css";
import { Container, Col, Row } from "react-bootstrap";
import ModalVideo from "react-modal-video";
import movieTrailer from "movie-trailer";

export default function Items(props) {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isOpen, setOpen] = useState(false);
  const film = `movie/${id}?api_key=${KEY}`;

  useEffect(() => {
    async function fetchData() {
      const request = await api.get(film);
      setMovie(request.data);
      setGenre(request.data.genres);
      return request;
    }
    fetchData();
  }, [film]);

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
    <div>
      <div
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="banner">
          <Container>
            <Row>
              <Col xs={3}>
                <img
                  className="img-fluid rounded"
                  src={`${image}${movie?.poster_path}`}
                  alt={movie?.title}
                />
              </Col>
              <Col xs={8}>
                <Row>
                  <h3 className="name">
                    {movie?.title || movie?.name || movie?.original_name}
                  </h3>
                  <h3 className="name">&nbsp;({movie?.release_date})</h3>
                </Row>
                <Row>
                  {genre.map((genres) => (
                    <p key={genres.id} className="name">
                      {genres.name},&nbsp;
                    </p>
                  ))}
                </Row>
                <p className="name">{movie?.overview}</p>
                <Row>
                  <button
                    className="banner-button"
                    onClick={() => handleClick(movie)}
                  >
                    Trailer
                  </button>
                  <button className="banner-button">
                    <a href={movie?.homepage} target="blank">
                      Homepage
                    </a>
                  </button>
                </Row>
              </Col>
              <Col xs={1} />
            </Row>
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
          </Container>
        </div>
      </div>
    </div>
  );
}
