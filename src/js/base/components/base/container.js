import React, { PropTypes } from 'react';

export const Container = (props) => (
  <div className="container">
    <div className="route-outer-wrapper">
      {props.children}
    </div>
  </div>
);

Container.propTypes = {
  children: PropTypes.object,
};
