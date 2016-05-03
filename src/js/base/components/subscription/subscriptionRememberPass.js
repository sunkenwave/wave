import React from 'react';
import { Subscription } from './subscription';

const msgStart = __('We have sent on your e-mail');
const msgMiddle = __('the link for restore password.');
const msgFinish = __('The link is valid during 1 hour.');
const msg = `${msgStart} ${msgMiddle} ${msgFinish}`;

const SubscriptionRememberPass = () => (
  <Subscription name="rememberPass" url="#" urltext={__('Continue')} msg={msg} btn="primary" />
);

export default SubscriptionRememberPass;
