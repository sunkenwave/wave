import React from 'react';
import { DefaultContainer } from '../templates/defaultContainer';

export const TournamentsInnerEnd = () => (
  <div className="tournaments-page">
    <div className="blue-section">
      <h3 className="default-container__title yellow">Большой квест</h3>
      <img src={`/static/mobile/images/base/thumb-cover-big.png`} />
    </div>
    <div className="blue-section clearfix">
      <DefaultContainer container="game-new" name="Game" />
      <DefaultContainer container="game-new" name="Game" />
      <DefaultContainer container="game-new" name="Game" />
    </div>
    <div className="blue-section">
      <h3 className="default-container__title">
        <span className="blue">Результаты</span>
        <span className="event-container__title-pretext gray-msg">
          Воскресенье 25.10.2015
        </span>
      </h3>
      <div className="win-tournament clearfix">
        <img src={`/static/mobile/images/base/win-tournament.png`} />
        <div className="win-tournament--box place-1">
          <span className="win-tournament--total">42000 кп</span>
          <span className="win-tournament--login">sivac***</span>
          <span className="win-tournament--result">Результат:</span>
          <span className="win-tournament--result-value">1000000</span>
        </div>
        <div className="win-tournament--box place-2">
          <span className="win-tournament--total">42000 кп</span>
          <span className="win-tournament--login">sivac***</span>
          <span className="win-tournament--result">Результат:</span>
          <span className="win-tournament--result-value">1000000</span>
        </div>
        <div className="win-tournament--box place-3">
          <span className="win-tournament--total">42000 кп</span>
          <span className="win-tournament--login">sivac***</span>
          <span className="win-tournament--result">Результат:</span>
          <span className="win-tournament--result-value">1000000</span>
        </div>
      </div>
      <table className="win-tournament-table">
        <thead>
          <tr>
            <th></th>
            <th>Логин</th>
            <th>Результат</th>
            <th>Приз, КП</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="blue">4</td>
            <td>fhjsd***</td>
            <td>440421</td>
            <td className="yellow">100</td>
          </tr>
          <tr>
            <td className="blue">5</td>
            <td>fhjsd***</td>
            <td>440421</td>
            <td className="yellow">100</td>
          </tr>
          <tr>
            <td className="blue">6</td>
            <td>fhjsd***</td>
            <td>440421</td>
            <td className="yellow">100</td>
          </tr>
          <tr>
            <td className="blue">7</td>
            <td>fhjsd***</td>
            <td>440421</td>
            <td className="yellow">100</td>
          </tr>
          <tr>
            <td className="blue">8</td>
            <td>fhjsd***</td>
            <td>440421</td>
            <td className="yellow">100</td>
          </tr>
          <tr>
            <td className="blue">9</td>
            <td>fhjsd***</td>
            <td>440421</td>
            <td className="yellow">100</td>
          </tr>
          <tr>
            <td className="blue">10</td>
            <td>fhjsd***</td>
            <td>440421</td>
            <td className="yellow">100</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="blue-section">
      <h4 className="default-container__title">Правила турнира</h4>
      <p>
        Лучшие слоты Vulkan Casino объединились в одном турнире,
        чтобы радовать вас щедрыми призами каждую неделю!
        Спешите навстречу приключениям и выигрышам:
        откройте тай-ны Древнего Египта вместе с Book of Ra,
        попытайте удачи в землях Скандинавии вместе с прекрасной воительницей,
        погрузитесь в непроходимую чащу центральной Мексики или отправляйтесь
        к берегам Америки на одном борту с Христофором Колумбом.
      </p>
      <p>
        Правила турнира: пройдите квалификацию в 200 раундов в любой из игр,
        заявленных в турнире, до его окончания.
        Участник, показавший лучший результат, пройдя квалификацию, получит
      </p>
    </div>
  </div>
);
