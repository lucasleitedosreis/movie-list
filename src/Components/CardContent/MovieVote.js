import React from "react";
import { ContentVote } from "./MovieVoteStyle";

export function MovieVote({ vote, overview }) {
  console.log(vote);
  return (
    <>
      <ContentVote>
        <p>{vote}</p>
      </ContentVote>
    </>
  );
}
