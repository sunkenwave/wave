import { wrapFetch } from './helpers';
import { routeActions } from 'redux-simple-router';

export const Authorization = {
  AUTHORIZATION_SEND: 'AUTHORIZATION_SEND',
  AUTHORIZATION_SUCCESS: 'AUTHORIZATION_SUCCESS',
  AUTHORIZATION_FAILURE: 'AUTHORIZATION_FAILURE',
  AUTHORIZATION_RESET: 'AUTHORIZATION_RESET',
};

export function authorizationSend(form) {
  return {
    type: Authorization.AUTHORIZATION_SEND,
    form,
  };
}

export function authorizationSuccess(user) {
  return {
    type: Authorization.AUTHORIZATION_SUCCESS,
    user,
  };
}

export function authorizationFailure(error) {
  return {
    type: Authorization.AUTHORIZATION_FAILURE,
    error,
  };
}

export function authorizationResetError() {
  return {
    type: Authorization.AUTHORIZATION_RESET,
  };
}

export function fetchAuthorization(form) {
  return function funcAuthorization(dispatch) {
    const handler = {};

    handler.postData = form;
    handler.path = 'users/login';

    handler.success = (data) => {
      dispatch(authorizationSuccess(data.data.attributes));
      dispatch(routeActions.push('/'));
    };
    handler.failure = (error) => {
      dispatch(authorizationFailure(error));
    };

    wrapFetch(dispatch, handler);
  };
}
