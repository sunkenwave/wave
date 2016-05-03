import { wrapFetch } from './helpers';
import { routeActions } from 'redux-simple-router';

export const ChangeForgottenPass = {
  CHANGE_FORGOTTEN_PASS_SEND: 'CHANGE_FORGOTTEN_PASS_SEND',
  CHANGE_FORGOTTEN_PASS_SUCCESS: 'CHANGE_FORGOTTEN_PASS_SUCCESS',
  CHANGE_FORGOTTEN_PASS_FAILURE: 'CHANGE_FORGOTTEN_PASS_FAILURE',
};

export function forgottenPassSend() {
  return { type: ChangeForgottenPass.CHANGE_FORGOTTEN_PASS_SEND };
}

export function forgottenPassSuccess(user) {
  return {
    type: ChangeForgottenPass.CHANGE_FORGOTTEN_PASS_SUCCESS,
    user,
  };
}

export function forgottenPassFailure(error) {
  return {
    type: ChangeForgottenPass.CHANGE_FORGOTTEN_PASS_FAILURE,
    error,
  };
}

export function fetchForgottenPass(pass) {
  return function funcFogottenPass(dispatch) {
    const handler = {};

    handler.path = 'users/password/recovery';

    handler.postData = pass;
    handler.send = function funcSend() {
      dispatch(forgottenPassSend(pass));
    };
    handler.success = function funcSuccess(data) {
      dispatch(forgottenPassSuccess(data.data.attributes));
      dispatch(routeActions.replace('/'));
      dispatch(routeActions.push('/is_chagne_pass'));
    };
    handler.failure = function funcFailure(error) {
      dispatch(forgottenPassFailure(error));
      dispatch(routeActions.replace('/'));
      dispatch(routeActions.push('/error_change_pass'));
    };

    wrapFetch(dispatch, handler);
  };
}

export const RecoverPass = {
  RECOVER_PASS_SEND: 'RECOVER_PASS_SEND',
  RECOVER_PASS_SUCCESS: 'RECOVER_PASS_SUCCESS',
  RECOVER_PASS_FAILURE: 'RECOVER_PASS_FAILURE',
  RECOVER_PASS_RESET: 'RECOVER_PASS_RESET',
};

export function recoverPassSend(email) {
  return {
    type: RecoverPass.RECOVER_PASS_SEND,
    email,
  };
}

export function recoverPassSuccess() {
  return { type: RecoverPass.RECOVER_PASS_SUCCESS };
}

export function recoverPassFailure(error) {
  return {
    type: RecoverPass.RECOVER_PASS_FAILURE,
    error,
  };
}

export function recoverPassReset() {
  return {
    type: RecoverPass.RECOVER_PASS_RESET,
  };
}

export function fetchRecoverPass(email) {
  return function funcRecoverPass(dispatch) {
    const handler = {};

    handler.path = 'users/password/recovery/demand';

    handler.postData = email;
    handler.send = function funcSend() {
      dispatch(recoverPassSend(email));
    };
    handler.success = function funcSuccess() {
      dispatch(recoverPassSuccess());
      dispatch(routeActions.replace('/'));
      dispatch(routeActions.push('/send_email'));
    };
    handler.failure = function funcFailure(error) {
      dispatch(recoverPassFailure(error));
    };

    wrapFetch(dispatch, handler);
  };
}
