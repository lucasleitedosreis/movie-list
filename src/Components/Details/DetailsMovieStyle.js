import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .movie img {
    display: block;
    width: 250px;
    margin: 1.5rem 0;
    border-radius: 0.8rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    margin-left: 3rem;
  }
  .title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  .sinopse {
    max-width: 900px;
    font-size: 1rem;
    line-height: 1.6rem;
  }
  .date {
    font-weight: 400;
    margin-top: 1rem;
    color: #999;
  }
  .btn {
    width: 150px;
    font-size: 1rem;
    padding: 1rem 2rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  .btn:hover {
    background: #888;
    color: #fff;
  }
`;
