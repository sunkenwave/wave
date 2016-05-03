import React from 'react';
import Subscription from './subscription';

const msg = 'Congratulations! Your password was successfully changed!';

const SuccessPass = () => (
  <Subscription name="success" url="/" urltext="ok" msg={msg} btn="primary" msgColor="green" />
);

export default SuccessPass;
