import React from 'react';
import { DefaultContainer } from '../templates/defaultContainer';

const propsCountainer = {
  container: 'event',
  img: '-big',
  title: 'Большой квест',
  name: 'Понедельник 07:00 —',
  date: 'Воскресенье 23:50 GMT',
};

export const Tournaments = () => (
  <div className="event-container event-container-tournaments">
    <div className="blue-section">
      <h3 className="event-container__title">Топовые</h3>
      <DefaultContainer {...propsCountainer} />
    </div>
    <div className="blue-section">
      <h3 className="event-container__title event-container__title-text-left">
        Недельные
        <span className="event-container__title-pretext">Пн-Вс</span>
      </h3>
      <DefaultContainer {...propsCountainer} />
    </div>
    <div className="blue-section">
      <h3 className="event-container__title event-container__title-text-left">
        Еженедельные
      </h3>
      <DefaultContainer {...propsCountainer} />
    </div>
  </div>
);
