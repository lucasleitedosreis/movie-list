import styled from "styled-components";

export const MenuUl = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 2rem;
  z-index: 100;
  a {
    text-decoration: none;
    font-weight: 500;
  }
`;
export const MenuLi = styled.div`
  background: #222;
  text-decoration: none;
  color: #fff;
  padding: 20px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &&:hover {
    background: #fff;
    color: #222;
  }
`;
