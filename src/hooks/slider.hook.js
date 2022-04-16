export const sliderInitialState = {
  currentSlide: 0,
  hasNext: false,
  hesPrev: false,
  totalItems: 0,
};

export const sliderReducer = (state, action) => {
  switch (action.type) {
    case "initiate":
      const newTotalItems = action.payload.totalItems;

      return {
        ...state,
        totalItems: newTotalItems,
        hasNext: newTotalItems > 0,
        hesPrev: state.currentSlide > 0,
      };

    case "reset":
      return sliderReducer(state, {
        type: "setSlide",
        payload: {
          currentSlide: state.currentSlide,
        },
      });

    case "setSlide":
      const nextCurrentSlide = action.payload.currentSlide;

      return {
        ...state,
        currentSlide: nextCurrentSlide,
        hasNext: nextCurrentSlide < state.totalItems,
        hesPrev: nextCurrentSlide > 0,
      };

    case "nextSlide":
      const nextSlideImg = state.currentSlide + 1;

      if (nextSlideImg >= state.totalItems) return state;

      return sliderReducer(state, {
        type: "setSlide",
        payload: {
          currentSlide: nextSlideImg,
        },
      });
    case "previousSlide":
      const previousSlideImg = state.currentSlide - 1;

      if (previousSlideImg < 0) return state;

      return sliderReducer(state, {
        type: "setSlide",
        payload: {
          currentSlide: previousSlideImg,
        },
      });

    default:
      return state;
  }
};
