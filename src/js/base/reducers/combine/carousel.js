import { LoadMainCarousel } from '../../actions/carousel';

export function mainCarousel(state = {
  data: null,
  error: false,
}, action) {
  switch (action.type) {
    case LoadMainCarousel.LOAD_CAROUSEL_SUCCESS:
      return Object.assign({}, state, {
        data: action.arr,
        error: false,
      });
    case LoadMainCarousel.LOAD_CAROUSEL_FAILURE:
      return Object.assign({}, state, {
        data: null,
        error: true,
      });
    case LoadMainCarousel.LOAD_CAROUSEL_SEND:
    default:
      return state;
  }
}
