import { wrapFetch } from './helpers';
import { routeActions } from 'redux-simple-router';

export const Registration = {
  REGISTRATION_SEND: 'REGISTRATION_SEND',
  REGISTRATION_SUCCESS: 'REGISTRATION_SUCCESS',
  REGISTRATION_FAILURE: 'REGISTRATION_FAILURE',
  REGISTRATION_RESET: 'REGISTRATION_RESET',
};

export function registrationSend(email) {
  return {
    type: Registration.REGISTRATION_SEND,
    email,
  };
}

export function registrationSuccess(user) {
  return {
    type: Registration.REGISTRATION_SUCCESS,
    user,
  };
}

export function registrationFailure(error) {
  return {
    type: Registration.REGISTRATION_FAILURE,
    error,
  };
}

export function registrationResetError() {
  return {
    type: Registration.REGISTRATION_RESET,
  };
}

export function fetchRegistration(email) {
  return function funcRegistration(dispatch) {
    const handler = {};

    handler.path = 'users/registration';
    handler.postData = email;

    handler.send = () => {
      dispatch(registrationSend(email));
    };
    handler.success = (data) => {
      dispatch(registrationSuccess(data.data.attributes));
      dispatch(routeActions.push('/'));
    };
    handler.failure = (error) => {
      dispatch(registrationFailure(error));
    };

    wrapFetch(dispatch, handler);
  };
}
