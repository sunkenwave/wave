import { CheckCoupon } from '../../actions/coupon';

export function coupon(state = '', action) {
  switch (action.type) {
    case CheckCoupon.CHECK_COUPON_SUCCESS:
      return '';
    case CheckCoupon.CHECK_COUPON_FAILURE:
      return action.error;
    case CheckCoupon.CHECK_COUPON_RESET_ERROR:
      return '';
    default:
      return state;
  }
}
