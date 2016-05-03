import React, { PropTypes } from 'react';
import { DefaultContainer } from '../templates/defaultContainer';

export const slideOne = (props, i) => {
  const propsDefaultContainer = {
    container: 'event',
    img: props.attributes.thumb,
    title: props.attributes.name,
    url: props.attributes['play-url'],
  };

  return (
    <div key={i}>
      <DefaultContainer {...propsDefaultContainer} />
    </div>
  );
};

slideOne.propTypes = {
  attributes: PropTypes.object,
};
