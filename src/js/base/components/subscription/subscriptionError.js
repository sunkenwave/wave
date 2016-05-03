import React from 'react';
import { Subscription } from './subscription';

const Error = () => {
  const propsSubscription = {
    name: 'error',
    url: '#',
    msg: __('Warning! A data error was found'),
    msgColor: 'red',
  };

  return <Subscription {...propsSubscription} />;
};

export default Error;
