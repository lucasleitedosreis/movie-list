import styled from "styled-components";
import { css } from "styled-components";

export const MovieItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const MovieContentAniamtion = styled.div`
  transition: all 0.5s;
  opacity: 0;

  ${(props) =>
    props.direction === "top" &&
    css`
      transform: translateY(100px);
    `}
  ${(props) =>
    props.direction === "left" &&
    css`
      transform: translateX(-100px);
    `}
  ${(props) =>
    props.direction === "bottom" &&
    css`
      transform: translateY(-100px);
    `}
  ${(props) =>
    props.direction === "right" &&
    css`
      transform: translateX(100px);
    `}
`;

export const MovieOverview = styled(MovieContentAniamtion)`
  color: #fff;
  font-size: 0.8em;
  line-height: 1.4rem;
`;
export const MovieVoteContent = styled(MovieContentAniamtion)``;

export const CardFlip = styled.div`
  position: relative;
  width: 250px;
  height: 373px;
  perspective: 700px;

  &:hover {
    ${MovieContentAniamtion} {
      transform: translate(0px);
      opacity: 1;
      transition: all 0.65s;
      transition-delay: 0.25s;
    }
  }

  .front {
    position: absolute;
    width: 250px;
    height: 373px;
    border-radius: 5px;
    transition: 0.8s;
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
    transition: 0.8s;
    transform: rotateY(-180deg);
    backface-visibility: hidden;
    opacity: 0;
  }
  &&:hover .back {
    transform: rotateY(0deg);
    opacity: 1;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    margin-bottom: 20px;
  }
`;

export const Title = styled.span`
  max-width: 200px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
`;
