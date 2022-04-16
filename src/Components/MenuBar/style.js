import styled from 'styled-components';

export const MenuUl = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  column-gap: 30px;
  z-index: 100;
  a {
    text-decoration: none;
    font-weight: 500;
  }
`;
export const MenuLi = styled.div`
  font-size: 2rem;
  color: #ffffffbe;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  border-bottom: solid 4px transparent;
  &&:hover {
    color: #fff;
    border-bottom: solid 4px #fff;
  }
  @media (max-width: 1023px) {
    font-size: 1.5rem;
  }
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`;
