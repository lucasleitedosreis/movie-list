import styled from "styled-components";

export const MovieListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 4rem 3rem;
  list-style: none;
  justify-content: center;
`;
export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 200px;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }
  span {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
  }
  a {
    transition: all 0.3s;
  }
  a:hover {
    transform: scale(1.05);
  }
`;
