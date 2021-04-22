import React from "react";
// import "./App.css";
import Row from "../../components/rowMovie";
import requests from "../../utils/request";
// import Banner from "./Banner";
// import Nav from "./Nav";
function App() {
  return (
    <div className="app">
      {/* <Nav />
      <Banner /> */}
      <Row title="Popular Movie" getData={requests.getPopularMovie} />
      <Row title="Popular TV Series" getData={requests.getPopularTv} />
      <Row title="Top Rated Movie" getData={requests.getTopRatedMovie} />
      <Row title="Top Rated TV Series" getData={requests.getTopRatedTv} />
      <Row title="Trending All" getData={requests.getTrendingDay} />
      <Row title="Trending Movie" getData={requests.getTrendingMovieDay} />
      <Row title="Trending TV Series" getData={requests.getTrendingTvDay} />
    </div>
  );
}

export default App;
