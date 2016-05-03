import React from 'react';
import Subscription from './subscription';

const Error404 = () => {
  const propsSubscription = {
    name: '404',
    url: '#',
    msg: 'This page is not found or doesn`t exist!',
    urltext: 'Come back',
  };

  return <Subscription {...propsSubscription} />;
};

export default Error404;
