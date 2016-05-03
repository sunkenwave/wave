import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export const Subscription = (props) => {
  const { url, btn, urltext, name, msg, msgColor } = props;
  const classNameLink = btn ? `btn btn--align btn--${btn}` : '';
  const markUpLink = <Link to={url} className={classNameLink}>{urltext}</Link>;
  const link = url ? markUpLink : '';

  return (
    <div className={`blue-section default-subscription section-${name}`}>
      <div>
        <i className={`icon--${name}`}></i>
        <p className={`default-container__title ${msgColor || 'white'}`}>{msg}</p>
        {link}
      </div>
    </div>
  );
};

Subscription.propTypes = {
  children: PropTypes.string,
  url: PropTypes.string,
  btn: PropTypes.string,
  urltext: PropTypes.string,
  name: PropTypes.string,
  msg: PropTypes.string,
  msgColor: PropTypes.string,
};
