/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../../Components/MoviesCard';
import { Title } from '../../Components/Title';
import { SearchBar } from '../../structure/search-bar';
import { Header } from '../Header';
import { MovieListStyled, SearchStyled } from './style';

const SearchPage = () => {
  const params = useParams();
  const [movies, setMovies] = useState([]);
  const [searchData, setSearchData] = useState('');

  useEffect(() => {
    const { search } = params;

    if (search) setSearchData(search);
  }, []);

  useEffect(() => {
    if (searchData.length > 0) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&page=01&query=${searchData}`)
        .then((response) => response.json())
        .then((jsonBody) => setMovies(jsonBody.results));
    }
  }, [searchData]);

  return (
    <SearchStyled>
      <Header />
      <SearchBar onChange={(value) => setSearchData(value)} />
      <Title>
        <div>{searchData}</div>
      </Title>
      {searchData.length === 0 ? (
        <div>Faça uma pesquisa...</div>
      ) : (
        <MovieListStyled>
          {movies?.map((movie) => {
            const { id, title, poster_path, vote_average, overview } = movie;
            return <MovieCard key={id} {...{ id, title, poster_path, vote_average, overview }} />;
          })}
        </MovieListStyled>
      )}
    </SearchStyled>
  );
};

export default SearchPage;
