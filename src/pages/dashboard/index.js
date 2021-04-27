import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/footer";
import Banner from "../../components/home/banner_movie";
import Row from "../../components/home/row_movie";
import Nav from "../../components/navbar";
import requests from "../../utils/request";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Container>
        <Row
          title="Popular Movie"
          getData={requests.getPopularMovie}
          isLargeRow
        />
        <Row title="Popular Series" getData={requests.getPopularTv} />
        <Row title="Top Rated Movie" getData={requests.getTopRatedMovie} />
        <Row title="Top Rated Series" getData={requests.getTopRatedTv} />
        <Row title="Trending Movie" getData={requests.getTrendingMovieDay} />
        <Row title="Trending Series" getData={requests.getTrendingTvDay} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
