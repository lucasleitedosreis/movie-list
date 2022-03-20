import React from "react";
import { Movie, MovieListUl } from "./MovieListStyle";

const MovieList = () => {
  const [movies, setMovies] = React.useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  React.useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"`,
    )
      .then((response) => response.json())
      .then((jsonBody) => setMovies(jsonBody.results));
  }, []);
  return (
    <MovieListUl>
      {movies.map(({ id, title, poster_path }) => (
        <Movie key={id}>
          <a href="#http://">
            <img src={`${image_path}${poster_path}`} alt={title} />
          </a>
          <span>{title}</span>
        </Movie>
      ))}
    </MovieListUl>
  );
};

export default MovieList;
