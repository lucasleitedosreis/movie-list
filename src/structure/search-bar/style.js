import styled from 'styled-components';

export const ContainerSearch = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;
export const ContentBar = styled.div`
  width: 600px;
  min-width: 250px;
  position: relative;
  display: flex;
  align-items: center;
`;
export const ContentInput = styled.input`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  border-radius: 30px;
  border: none;
  padding: 2rem;
  &&:focus {
    outline: none;
    -webkit-box-shadow: inset 0px 0px 3px 4px #000000;
    box-shadow: inset 0px 0px 3px 4px #000000;
  }
  &&::placeholder {
    font-size: 1.8rem;
    opacity: 0.5;
  }
  @media (max-width: 767px) {
    height: 50px;
    padding: 1rem;
    font-size: 1.2rem;

    &&::placeholder {
      font-size: 1rem;
      opacity: 0.5;
    }
  }
`;
export const BtnSearch = styled.button`
  position: absolute;
  background: none;
  right: 10px;
  top: 0;
  padding: 15px;
  font-size: 1.5rem;
  border: none;
  border-radius: 50%;
  opacity: 0.5;
  cursor: pointer;
  transition: all 0.2s;
  &&:hover {
    opacity: 1;
  }
  @media (max-width: 767px) {
    padding: 10px;
    right: 5px;
  }
`;
