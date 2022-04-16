/* eslint-disable camelcase */
import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../../Components/MoviesCard';
import { Title } from '../../Components/Title';
import { SearchBar } from '../../structure/search-bar';
import { HomeStyled, MovieListStyled } from './style';

const Home = () => {
  const params = useParams();

  // seta o currentId para populares
  const [currentId, setCurrentId] = useState('populares');
  const [movies, setMovies] = React.useState([]);

  useEffect(() => {
    // faz a comparação do currentId com a url e seta para id atual
    if (currentId !== params.id) {
      setCurrentId(params.id);
    }
  }, [params, currentId]);

  useEffect(() => {
    let url = '';
    // verifica qual a url está recebendo
    if (currentId === 'populares') {
      url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=1`;
    } else if (currentId === 'tendencias') {
      url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=1`;
    } else if (currentId === 'lancamentos') {
      url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=1`;
    }
    // depois de verificado faz a fetch de acordo com a url recebida
    fetch(url)
      .then((response) => response.json())
      .then((jsonBody) => setMovies(jsonBody.results));
  }, [currentId]);

  // Altera o título da página de acordo com a id
  const pageTitle = useMemo(() => {
    if (currentId === 'populares') {
      return 'Populares';
    }
    if (currentId === 'tendencias') {
      return 'Tendências';
    }
    if (currentId === 'lancamentos') {
      return 'Lançamentos';
    }
    return 'Populares';
  }, [currentId]);

  return (
    <HomeStyled>
      <SearchBar />
      <Title>
        <div>{pageTitle}</div>
      </Title>
      <MovieListStyled>
        {movies.map((movie) => {
          const { id, title, poster_path, vote_average, overview } = movie;
          return <MovieCard key={id} {...{ id, title, poster_path, vote_average, overview }} />;
        })}
      </MovieListStyled>
    </HomeStyled>
  );
};

export default Home;
