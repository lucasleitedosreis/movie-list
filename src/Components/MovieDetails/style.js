import styled from 'styled-components';

export const ContentBG = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${(props) => props.bgImage}) center no-repeat;
  background-size: cover;
`;
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px) brightness(30%);
  -webkit-backdrop-filter: blur(5px);
`;

export const MoviePoster = styled.img`
  display: block;
  max-width: 280px;
  width: 100%;
  margin: 1.5rem 0;
  border-radius: 0.8rem;

  @media (max-width: 767px) {
    width: 200px;
  }
`;
export const DetailsTitle = styled.h1`
  max-width: 800px;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 1023px) {
    font-size: 2rem;
  }
  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
`;

export const Sinopse = styled.span`
  max-width: 900px;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6rem;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;
export const Date = styled.span`
  font-weight: 400;
  margin-top: 1rem;
  color: #999;
`;
export const Button = styled.button`
  width: 150px;
  height: 40px;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 2rem 0;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &&:hover {
    background: #333;
    color: #fff;
  }
  @media (max-width: 1023px) {
  }
  @media (max-width: 767px) {
    width: 100px;
    font-size: 1rem;
  }
`;
