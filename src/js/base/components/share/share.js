import React from 'react';
import GamesSectionWithoutName from '../games/gamesSectionWithoutName';

export const Share = () => (
  <div className="blue-section">
    <article className="text-article">
      <h4 className="title">РЕЗУЛЬТАТЫ СУПЕР ЛОТЕРЕИ "ЗВЕЗДНЫЙ ВУЛКАН"</h4>
      <p className="date">2016.01.06</p>
      <p>25 сентября игровой клуб VULKAN STARS отметил свой первый День Рождения!</p>
      <p>
        В честь этого феерического события, в течении недели,
        мы разыграли 2 000 000 рублей. После любого торжества
        обычно остаются разные воспоминания. Мы оставили своим
        игрокам только приятные воспоминания и денежные призы. ;)</p>
      <p>Знакомьтесь с победителями праздничной супер лотереи  "Звездный вулкан":</p>
      <span>1 место - egor-*** - 585 000 Руб</span>
      <br />
      <span>2 место - error*** - 250 000 Руб</span>
      <br />
      <span>3 место - kilka*** - 100 000 Руб</span>
      <br />
      <p>А какая твоя любимая? Поиграй в неё сейчас!</p>
      <p>Отыщи свою "любовь" среди них:</p>
    </article>
    <GamesSectionWithoutName />
  </div>
);
