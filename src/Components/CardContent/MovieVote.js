import { number } from "prop-types";
import React from "react";
import { ContentVote } from "./MovieVoteStyle";

export function MovieVote({ vote }) {
  return (
    <ContentVote>
      <p>{vote}</p>
    </ContentVote>
  );
}

MovieVote.defaultProps = {
  vote: 0,
};

MovieVote.propTypes = {
  vote: number,
};
