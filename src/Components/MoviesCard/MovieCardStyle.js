import styled from "styled-components";

export const MovieItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
export const CardFlip = styled.div`
  position: relative;
  width: 250px;
  height: 373px;
  perspective: 700px;

  .front {
    position: absolute;
    width: 250px;
    height: 373px;
    border-radius: 5px;
    transition: 700ms;
    z-index: 1;
  }
  &&:hover .front {
    transform: rotateY(180deg);
    z-index: 0;
  }
  .back {
    position: absolute;
    width: 250px;
    height: 373px;
    background: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    padding: 1rem;
    border-radius: 5px;
    transition: 700ms;
    transform: rotateY(-180deg);
    backface-visibility: hidden;
  }
  &&:hover .back {
    transform: rotateY(0deg);
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    margin-bottom: 20px;
  }
`;
export const MovieOverview = styled.div`
  color: #fff;
  font-size: 0.8em;
  line-height: 1.4rem;
`;

export const Title = styled.span`
  max-width: 200px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
`;
