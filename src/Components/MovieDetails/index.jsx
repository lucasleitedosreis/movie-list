/* eslint-disable camelcase */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Container, ContentBG, Date, Details, DetailsTitle, MoviePoster, Sinopse } from './style';

const MovieDetails = () => {
  const { id } = useParams();
  const [movies, setMovies] = React.useState({});
  const imagePath = 'https://image.tmdb.org/t/p/w500';
  const backdropImage = 'https://image.tmdb.org/t/p/original';

  React.useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&include_image_language=pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        const { title, overview, poster_path, backdrop_path, release_date } = data;
        const movie = {
          id,
          title,
          sinopse: overview,
          image: `${imagePath}${poster_path}`,
          bgImage: `${backdropImage}${backdrop_path}`,
          data: release_date,
        };
        setMovies(movie);
      });
  }, [id]);
  return (
    <ContentBG bgImage={movies.bgImage}>
      <Container>
        <MoviePoster src={movies.image} alt={movies.title} />
        <Details>
          <DetailsTitle>{movies.title}</DetailsTitle>
          <Sinopse>{movies.sinopse}</Sinopse>
          <Date>Data Lançamento: {movies.data}</Date>
          <Link to='/'>
            <Button>Voltar</Button>
          </Link>
        </Details>
      </Container>
    </ContentBG>
  );
};

export default MovieDetails;
