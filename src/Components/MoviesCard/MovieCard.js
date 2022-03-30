import React from "react";
import {
  CardFlip,
  MovieItemStyled,
  MovieOverview,
  Title,
} from "./MovieCardStyle";
import { Link } from "react-router-dom";
import { MovieVote } from "../CardContent/MovieVote";

const image_path = "https://image.tmdb.org/t/p/w500";

const MovieCard = (props) => {
  const { id, title, poster_path, vote_average, overview } = props;

  return (
    <MovieItemStyled key={id}>
      <Link to={`/details/${id}`}>
        <CardFlip>
          <div className="front">
            <img src={`${image_path}${poster_path}`} alt={title} />
          </div>
          <div className="back">
            <MovieVote vote={vote_average} />
            <MovieOverview>{`${overview.substr(0, 175)} [...]`}</MovieOverview>
          </div>
        </CardFlip>
      </Link>
      <Title>{title}</Title>
    </MovieItemStyled>
  );
};

export default MovieCard;
