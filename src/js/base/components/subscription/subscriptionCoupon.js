import React from 'react';
import { Subscription } from './subscription';

const SubscriptionCoupon = () => {
  const propsSubscription = {
    name: 'success',
    url: '#',
    msg: __('Your request was successfully sent!'),
    msgColor: 'green',
    btn: 'primary',
    urltext: 'ok',
  };

  return <Subscription {...propsSubscription} />;
};

export default SubscriptionCoupon;
