import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../components/footer";
import Items from "../../components/item";
import Nav from "../../components/navbar";
import Row from "../../components/home/row_movie";
import requests from "../../utils/request";

export default function index() {
  return (
    <div className="app">
      <Nav />
      <Items />
      <Container>
        <Row title="Another Movie" getData={requests.getTrendingMovieWeek} />
      </Container>
      <Footer />
    </div>
  );
}
