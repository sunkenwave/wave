import React from 'react';
import { DefaultContainer } from '../templates/defaultContainer';

const propsContainer = {
  container: 'share',
  name: 'Новый турнир "Поле богатств"',
  date: '2015.10.12',
  img: '-shares',
};

export const GamesSection = () => (
  <div className="games-section">
    <div className="games-section__body">
      <DefaultContainer {...propsContainer} />
    </div>
  </div>
);
