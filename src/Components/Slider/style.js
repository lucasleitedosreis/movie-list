import styled, { css } from 'styled-components';

export const SliderWrap = styled.div`
  width: auto;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const SliderController = styled.div`
  position: absolute;
  display: flex;
  width: 50px;
  align-items: center;
  justify-content: center;
  font-size: 70px;
  height: 100%;
  transition: all 0.3s;
  z-index: 1;

  ${(props) => (props.isLeft ? 'left: 0;' : 'right: 0;')}

  ${(props) =>
    props.disabled
      ? css`
          cursor: default;
        `
      : css`
          cursor: pointer;
          &:hover {
            background-color: rgba(0, 0, 0, 0.6);
          }
        `}
`;

export const SliderContent = styled.div`
  display: flex;
  transition: transform 1s ease-in-out;
`;

export const SliderImgItem = styled.div`
  flex-shrink: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  overflow: hidden;
  transition: 0.4s;
`;

export const SliderImage = styled.img`
  display: block;
`;
