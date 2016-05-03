import { wrapFetch } from './helpers';
import { routeActions } from 'redux-simple-router';

export const CheckCoupon = {
  CHECK_COUPON_SEND: 'CHECK_COUPON_SEND',
  CHECK_COUPON_SUCCESS: 'CHECK_COUPON_SUCCESS',
  CHECK_COUPON_FAILURE: 'CHECK_COUPON_FAILURE',
  CHECK_COUPON_RESET_ERROR: 'CHECK_COUPON_RESET_ERROR',
};

export const checkCouponSend = (coupon) => ({
  type: CheckCoupon.CHECK_COUPON_SEND,
  coupon,
});

export const checkCouponSuccess = () => ({
  type: CheckCoupon.CHECK_COUPON_SUCCESS,
});

export const checkCouponFailure = (error) => ({
  type: CheckCoupon.CHECK_COUPON_FAILURE,
  error,
});

export const checkCouponResetError = () => ({
  type: CheckCoupon.CHECK_COUPON_RESET_ERROR,
});

export const fetchCoupon = (coupon) => (dispatch) => {
  const handler = {};
  handler.postData = coupon;
  handler.path = 'coupon';

  handler.success = () => {
    dispatch(checkCouponSuccess());
    dispatch(routeActions.push('/success_coupon'));
  };
  handler.failure = (error) => {
    dispatch(checkCouponFailure(error));
  };

  wrapFetch(dispatch, handler);
};
