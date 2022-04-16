import { arrayOf, string } from 'prop-types';
import React, { useEffect, useMemo, useReducer, useRef } from 'react';
import { sliderInitialState, sliderReducer } from '../../hooks/slider.hook';
import { useWindowSize } from '../../hooks/useWindowResize';
import { SliderContent, SliderController, SliderImage, SliderImgItem, SliderWrap } from './style';

export const Slider = (props) => {
  // chama a função para resetar o container
  const { width } = useWindowSize();
  // pega o tamanho do container que envolve a imagem
  const sliderContentRef = useRef();

  const [state, sliderDispatch] = useReducer(sliderReducer, sliderInitialState);

  useEffect(() => {
    sliderDispatch({ type: 'initiate', payload: { totalItems: props.images.length } });
  }, []);

  useEffect(() => {
    sliderDispatch({ type: 'reset' });
  }, [width]);

  const sliderContentWidth = useMemo(() => {
    if (sliderContentRef.current) return sliderContentRef.current.offsetWidth;

    return 0;
  }, [sliderContentRef.current?.offsetWidth]);
  return (
    <SliderWrap>
      <SliderController isLeft disabled={!state.hesPrev} onClick={() => sliderDispatch({ type: 'previousSlide' })}>
        {'<'}
      </SliderController>
      <SliderContent ref={sliderContentRef} style={{ transform: `translateX(-${sliderContentWidth * state.currentSlide}px)` }}>
        {props.images.map((img) => (
          <SliderImgItem>
            <SliderImage src={img} />
          </SliderImgItem>
        ))}
      </SliderContent>
      <SliderController disabled={!state.hasNext} onClick={() => sliderDispatch({ type: 'nextSlide' })}>
        {'>'}
      </SliderController>
    </SliderWrap>
  );
};

Slider.propTypes = {
  images: arrayOf(string).isRequired,
};
