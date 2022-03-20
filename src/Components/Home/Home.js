import React from "react";
import MovieList from "../MovieList/MovieList";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <h1>Movies</h1>
      <MovieList />
    </Container>
  );
};

export default Home;
