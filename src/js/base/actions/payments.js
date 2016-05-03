import { wrapFetch } from './helpers';

export const PaymentSystem = {
  PAYMENT_SYSTEM_SEND: 'PAYMENT_SYSTEM_SEND',
  PAYMENT_SYSTEM_SUCCESS: 'PAYMENT_SYSTEM_SUCCESS',
  PAYMENT_SYSTEM_FAILURE: 'PAYMENT_SYSTEM_FAILURE',
};

export function paymentSystemSend() {
  return { type: PaymentSystem.PAYMENT_SYSTEM_SEND };
}

export function paymentSystemSuccess(payment) {
  return {
    type: PaymentSystem.PAYMENT_SYSTEM_SUCCESS,
    payment,
  };
}

export function paymentSystemFailure(error) {
  return {
    type: PaymentSystem.PAYMENT_SYSTEM_FAILURE,
    error,
  };
}

export function fetchPaymentSystem() {
  return function funcFetchPaymentSystem(dispatch) {
    const handler = {};

    handler.path = 'cash/payin';

    handler.success = function funcSuccess(data) {
      dispatch(paymentSystemSuccess(data.data));
    };
    handler.failure = function funcFailure(error) {
      dispatch(paymentSystemFailure(error));
    };

    wrapFetch(dispatch, handler);
  };
}
