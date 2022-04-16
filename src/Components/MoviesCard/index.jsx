/* eslint-disable camelcase */
import { number, string } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { ContentMovieCard } from '../ContentMovieCard';
import { CardFlip, MovieItemStyled, MovieOverview, MovieVoteContent, Title } from './style';

const image_path = 'https://image.tmdb.org/t/p/w500';

const MovieCard = (props) => {
  const { id, title, poster_path, vote_average, overview } = props;

  return (
    <MovieItemStyled key={id}>
      <Link to={`/details/${id}`}>
        <CardFlip>
          <div className='front'>
            <img src={`${image_path}${poster_path}`} alt={title} />
          </div>
          <div className='back' background={poster_path}>
            <MovieVoteContent direction='bottom'>
              <ContentMovieCard vote={vote_average} />
            </MovieVoteContent>
            <MovieOverview direction='top'>{`${overview.substr(0, 175)} [...]`} </MovieOverview>
          </div>
        </CardFlip>
      </Link>
      <Title>{title}</Title>
    </MovieItemStyled>
  );
};

MovieCard.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  poster_path: string.isRequired,
  vote_average: number.isRequired,
  overview: string.isRequired,
};

export default MovieCard;
