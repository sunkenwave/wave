import { wrapFetch } from './helpers';

export const Deposit = {
  DEPOSIT_SEND: 'DEPOSIT_SEND',
  DEPOSIT_SUCCESS: 'DEPOSIT_SUCCESS',
  DEPOSIT_FAILURE: 'DEPOSIT_FAILURE',
};

export function depositSend() {
  return { type: Deposit.DEPOSIT_SEND };
}

export function depositSuccess(deposit) {
  return {
    type: Deposit.DEPOSIT_SUCCESS,
    deposit,
  };
}

export function depositFailure(error) {
  return {
    type: Deposit.DEPOSIT_FAILURE,
    error,
  };
}

export function fetchDeposit() {
  return function funcFetchDeposit(dispatch) {
    const handler = {};

    handler.path = 'cash/offers';

    handler.success = function funcSuccess(data) {
      const list = data.data.map((item) => ({
        amount: item.attributes.amount / 100,
        percents: item.attributes.percents,
      }));
      dispatch(depositSuccess(list));
    };
    handler.failure = function funcFailure(error) {
      dispatch(depositFailure(error));
    };

    wrapFetch(dispatch, handler);
  };
}
