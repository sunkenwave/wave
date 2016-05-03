import React from 'react';
import { DefaultContainer } from './defaultContainer';

export const EventContainer = () => (
  <div className="event-container">
    <div className="hr"></div>
    <h3 className="event-container__title">Турнир</h3>
    <DefaultContainer container="event" img="-big" title="Бриллиантовая Лихорадка" />
    <h3 className="event-container__title">Лотерея</h3>
    <DefaultContainer container="event" img="-big" title={'"Клуб Джентельменов"'} />
  </div>
);
