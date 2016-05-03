import React from 'react';
import { Subscription } from './subscription';

const msgStart = __('The web site is currently under technical maintenance!');
const msgMiddleBefore = __('We are really sorry for the temporary inconveniences,');
const msgMiddleAfter = __('we will solve the problem in the nearest future.');
const msgFinish = __('All your data and funds are totally safe.');
const msg = `${msgStart} ${msgMiddleBefore} ${msgMiddleAfter} ${msgFinish}`;

const Offline = () => <Subscription name="offline" msg={msg} />;

export default Offline;
