import { wrapFetch } from './helpers';
import { wsClose } from './webSocket';
import { routeActions } from 'redux-simple-router';

export const Logout = {
  LOGOUT_SEND: 'LOGOUT_SEND',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE',
};

export function logoutSend() {
  return { type: Logout.LOGOUT_SEND };
}

export function logoutSuccess() {
  return { type: Logout.LOGOUT_SUCCESS };
}

export function logoutFailure(error) {
  return {
    type: Logout.LOGOUT_FAILURE,
    error,
  };
}

export function fetchLogout() {
  return function funcLogout(dispatch) {
    const handler = {};

    handler.path = 'users/logout';

    handler.success = (data) => {
      dispatch(logoutSuccess());
      dispatch(routeActions.push(data.data.attributes['redirect-url']));
      dispatch(wsClose());
    };
    handler.failure = (error) => {
      dispatch(logoutFailure(error));
    };
    wrapFetch(dispatch, handler);
  };
}
