import styled from 'styled-components';

export const TitleStyled = styled.h1`
  text-align: center;

  > div {
    font-size: 4rem;
    color: #fff;
    margin-top: 30px;

    @media (max-width: 1023px) {
      font-size: 3rem;
    }
    @media (max-width: 800px) {
      font-size: 2rem;
    }
  }
  .text-details {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;
