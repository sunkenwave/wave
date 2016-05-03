import React from 'react';
import { Subscription } from './subscription';

const ErrorChangePass = () => {
  const propsSubscription = {
    name: 'error',
    url: '#',
    msg: __('This promo code is expired'),
    msgColor: 'red',
    btn: 'danger',
    urltext: 'ok',
  };

  return <Subscription {...propsSubscription} />;
};

export default ErrorChangePass;
