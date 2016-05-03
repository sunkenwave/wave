import React from 'react';

export const TopPlayers = () => (
  <div className="top-players">
    <div className="blue-section">
      <ul className="sort-title">
        <li className="active">
          Топ 10
          <span>
            <img src={`/static/mobile/images/base/sort-arrow.png`} alt="arrow" />
          </span>
        </li>
        <li>
          За декабрь
          <span>
            <img src={`/static/mobile/images/base/sort-arrow.png`} alt="arrow" />
          </span>
        </li>
        <li>
          Все
          <span>
            <img src={`/static/mobile/images/base/sort-arrow.png`} alt="arrow" />
          </span>
        </li>
      </ul>
      <div className="rating-table-wrap">
        <table>
          <tr>
            <th></th>
            <th>Игрок</th>
            <th className="sort-by-win">
              Выигрыш
              <span>
                <img src={`/static/mobile/images/base/sort-arrow.png`} alt="arrow" />
              </span>
            </th>
            <th>Актив..</th>
          </tr>
          <tr>
            <td className="col-1">1</td>
            <td className="col-2">Kisel***</td>
            <td className="col-3">1 025 215 руб</td>
            <td className="col-4">&mdash;</td>
          </tr>
          <tr>
            <td className="col-1">2</td>
            <td className="col-2">Kisel***</td>
            <td className="col-3">1 025 215 руб</td>
            <td className="col-4 up">+24</td>
          </tr>
          <tr>
            <td className="col-1">110</td>
            <td className="col-2">Kisel***</td>
            <td className="col-3">1 025 215 руб</td>
            <td className="col-4 down">-2</td>
          </tr>
        </table>
      </div>
      <h4 className="sub-title">Моя позиция:</h4>
      <div className="my-position">
        <table>
          <tr>
            <td className="col-1">110</td>
            <td className="col-2">Kisel***</td>
            <td className="col-3">1 025 215 руб</td>
            <td className="col-4 up">+27</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
);
