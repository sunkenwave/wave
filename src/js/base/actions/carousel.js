export const LoadMainCarousel = {
  LOAD_CAROUSEL_SEND: 'LOAD_CAROUSEL_SEND',
  LOAD_CAROUSEL_SUCCESS: 'LOAD_CAROUSEL_SUCCESS',
  LOAD_CAROUSEL_FAILURE: 'LOAD_CAROUSEL_FAILURE',
};

export function loadMainCarouselSend() {
  return {
    type: LoadMainCarousel.LOAD_CAROUSEL_SEND,
  };
}

export function loadMainCarouselSuccess(arr) {
  return {
    type: LoadMainCarousel.LOAD_CAROUSEL_SUCCESS,
    arr,
  };
}

export function loadMainCarouselFailure(error) {
  return {
    type: LoadMainCarousel.LOAD_CAROUSEL_FAILURE,
    error,
  };
}

export function loadMainCarousel() {
  return function funcLoadCarousel(dispatch) {
    dispatch(loadMainCarouselSend());
    return fetch('/post/main_carousel', { credentials: 'same-origin' })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          dispatch(loadMainCarouselSuccess(data));
        } else {
          dispatch(loadMainCarouselFailure());
        }
      })
      .catch((error) => dispatch(loadMainCarouselFailure(error)));
  };
}
