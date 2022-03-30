import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../../Components/MoviesCard/MovieCard";
import { SideBar } from "../../Components/SideBar/SideBar";
import { Title } from "../../Components/Title/Title";
import { MovieListStyled } from "./HomeStyle";

const Home = () => {
  const params = useParams();
  const [currentId, setCurrentId] = useState("populares");
  const [movies, setMovies] = React.useState([]);

  useEffect(() => {
    if (currentId !== params.id) setCurrentId(params.id);
  }, [params, currentId]);

  useEffect(() => {
    let url = "";

    if (currentId === "populares")
      url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=1`;
    else if (currentId === "tendencias")
      url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=1`;

    if (url) {
      fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => setMovies(jsonBody.results));
    }
  }, [currentId]);

  const title = useMemo(() => {
    if (currentId === "tendencias") return "Tendências";

    return "Populares";
  }, [currentId]);

  return (
    <>
      <SideBar></SideBar>
      <Title>
        <div>{title}</div>
      </Title>
      <MovieListStyled>
        {movies.map((movie) => {
          const { id, title, poster_path, vote_average, overview } = movie;
          return (
            <MovieCard
              key={id}
              {...{ id, title, poster_path, vote_average, overview }}
            />
          );
        })}
      </MovieListStyled>
    </>
  );
};

export default Home;
