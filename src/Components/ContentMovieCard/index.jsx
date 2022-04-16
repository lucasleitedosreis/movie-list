import React from 'react';
import { ContentVote } from './style,';

export function ContentMovieCard({ vote }) {
  return (
    <ContentVote>
      <p>{vote}</p>
    </ContentVote>
  );
}
