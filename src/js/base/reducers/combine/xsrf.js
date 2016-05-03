import { UPDATE_XSRF } from '../../actions/helpers';

const initialXSRF = window.data ? window.data.global._xsrf : null;

export function xsrf(state = initialXSRF, action) {
  switch (action.type) {
    case UPDATE_XSRF:
      return action.xsrf;
    default:
      return state;
  }
}
