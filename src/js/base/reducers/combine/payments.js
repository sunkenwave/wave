import { PaymentSystem } from '../../actions/payments';

export function paymentSystem(state = {
  list: null,
  error: null,
}, action) {
  switch (action.type) {
    case PaymentSystem.PAYMENT_SYSTEM_SEND:
      return state;
    case PaymentSystem.PAYMENT_SYSTEM_SUCCESS:
      return Object.assign({}, state, {
        list: action.payment,
      });
    case PaymentSystem.PAYMENT_SYSTEM_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
      });
    default:
      return state;
  }
}
