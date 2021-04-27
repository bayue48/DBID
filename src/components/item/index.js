import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import api from "../../utils/api";
import { KEY, image } from "../../utils/secret";
import "./item.css";
import { Container, Col, Row } from "react-bootstrap";
import ModalVideo from 'react-modal-video'
import movieTrailer from "movie-trailer";

export default function Items(props) {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [genre, setGenre] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [isOpen, setOpen] = useState(false)
  console.log(id);

  useEffect(() => {
    async function fetchData() {
      const request = await api.get(
        `movie/` + id + `?api_key=${KEY}` || `tv/` + id + `?api_key=${KEY}`
      );
      setMovie(request.data);
      setGenre(request.data.genres);
      console.log(request.data);
      console.log(request.data.genres);
      return request;
    }
    fetchData();
  }, []);

  const handleClick = (movie) => {
    if (trailerUrl){
        setTrailerUrl('')
    } else {
        movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {

            const urlParams = new  URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));

        }) .catch((error) => console.log(error));
        setOpen(true)
    }
}

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
              <Col>
                <img
                  className="img-fluid rounded"
                  src={`${image}${movie.poster_path}`}
                  alt=""
                />
              </Col>
              <Col xs={6}>
                <Row>
                  <h3 className="name">{movie?.title || movie?.name || movie?.original_name}</h3>
                  <h3 className="name">&nbsp;({movie?.release_date || movie?.first_air_date})</h3>
                </Row>
                <Row>
                  {genre.map((genres) => (
                    <p className="name">{genres.name},&nbsp;</p>
                  ))}
                </Row>
                <p className="name">{movie.overview}</p>
                <Row>
                    <button className="banner-button" onClick={() => handleClick(movie)}>Play</button>
                    <button className="banner-button"><a href={movie.homepage} target="blank">Homepage</a></button>
                </Row>
              </Col>
              <Col />
            </Row>
            {trailerUrl && <ModalVideo channel='youtube' autoplay youtube={{mute:1,autoplay:1}} isOpen={isOpen} videoId={trailerUrl} onClose={() => setOpen(false)}/>}
          </Container>
        </div>
      </div>
    </div>
  );
}
