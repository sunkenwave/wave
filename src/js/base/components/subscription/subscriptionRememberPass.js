import React, { PropTypes } from 'react';
import Subscription from './subscription';
import { translate } from './../translation/transform';

const SubscriptionRememberPass = (props) => {
  const { __ } = props;

  const msgStart = __('We have sent on your e-mail');
  const msgMiddle = __('the link for restore password.');
  const msgFinish = __('The link is valid during 1 hour.');
  const msg = `${msgStart} ${msgMiddle} ${msgFinish}`;

  return (
    <Subscription name="rememberPass" url="#" urltext="Continue" msg={msg} btn="primary"
      long="true"
    />
  );
};

SubscriptionRememberPass.propTypes = {
  __: PropTypes.func,
};

export default translate(SubscriptionRememberPass);
