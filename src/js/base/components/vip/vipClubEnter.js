import React from 'react';
import { DefaultContainer } from '../templates/defaultContainer';

const name = `
  Вы получите персонального ассистента,
  с которым сможете решить любые вопросы
  в удобном для вас режиме.
`;

const propsContainer = {
  container: 'vip',
  img: `/static/mobile/images/base/vip-1.png`,
  title: 'VIP турниры',
  name,
};

export const VipClubEnter = () => (
  <div className="vip">
    <div className="blue-section">
      <h2 className="default-container__title yellow">
        Добро пожаловать в элитный клуб для избранных игроков.
      </h2>
      <p className="txt-top">
        Все, чего вам так не хватало,
        для того чтобы полностью окунуться
        с головой в волну азарта и ощутить полный вкус победы уже здесь.
        Попробовать все привилегии VIP клуба можно уже прямо сейчас.
      </p>
      <div className="btn btn--default">Вступить в клуб</div>
    </div>
    <div className="blue-section">
      <h2 className="title-vip">Привилегии</h2>
      <DefaultContainer {...propsContainer} />
    </div>
    <div className="blue-section">
      <div className="btn btn--default">Вступить в клуб</div>
    </div>
  </div>
);
