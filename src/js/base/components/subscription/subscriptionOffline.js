import React, { PropTypes } from 'react';
import Subscription from './subscription';
import { translate } from './../translation/transform';

const Offline = (props) => {
  const { __ } = props;

  const msgStart = __('The web site is currently under technical maintenance!');
  const msgMiddleBefore = __('We are really sorry for the temporary inconveniences,');
  const msgMiddleAfter = __('we will solve the problem in the nearest future.');
  const msgFinish = __('All your data and funds are totally safe.');
  const msg = `${msgStart} ${msgMiddleBefore} ${msgMiddleAfter} ${msgFinish}`;

  return (
    <Subscription name="offline" msg={msg} long="true" />
  );
};

Offline.propTypes = {
  __: PropTypes.func,
};

export default translate(Offline);
