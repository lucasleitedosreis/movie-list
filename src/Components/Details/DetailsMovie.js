import React from "react";
import { Link, useParams } from "react-router-dom";
import { Title } from "../Title/Title";
import { Container } from "./DetailsMovieStyle";

const DetailsMovie = () => {
  const { id } = useParams();
  const [movies, setMovies] = React.useState({});
  const image_path = "https://image.tmdb.org/t/p/w500";

  React.useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR
      `)
      .then((response) => response.json())
      .then((data) => {
        const { title, overview, poster_path, release_date } = data;
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${image_path}${poster_path}`,
          data: release_date,
        };
        setMovies(movie);
      });
  }, [id]);
  return (
    <Container>
      <div className="movie">
        <img src={movies.image} alt="" />
      </div>
      <div className="details">
        <Title>
          <div className="text-details">{movies.title}</div>
        </Title>
        <span className="sinopse">{movies.sinopse}</span>
        <span className="date">Data Lançamento: {movies.data}</span>
        <Link to="/">
          <button className="btn">Voltar</button>
        </Link>
      </div>
    </Container>
  );
};

export default DetailsMovie;
