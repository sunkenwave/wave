import React from 'react';
import { Subscription } from './subscription';

const msg = __('Your request was successfully sent!');

const Success = () => (
  <Subscription name="success" url="#" urltext="ok" msg={msg} btn="primary" msgColor="green" />
);

export default Success;
