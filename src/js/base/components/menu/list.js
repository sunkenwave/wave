import React, { PropTypes } from 'react';
import ListInner from './listInner';

export const List = (props) => {
  const { icon, title, inner, visible, handler } = props;
  const innerList = inner ? inner.map((item, i) => <ListInner {...item} key={i} />) : null;
  const classVisible = visible ? '' : 'hidden';

  const prevent = (e) => e.preventDefault();

  return (
    <li className="menu__navigation-item" onClick={handler}>
      <a href="#" className="menu__navigation-item--link" onClick={prevent}>
        <div className="menu__icon__align">
          <i className={`menu__icon ${icon}`}></i>
        </div>
        <span>{title}</span>
      </a>
      <ul className={`menu__navigation-inner ${classVisible}`}>
        {innerList}
      </ul>
    </li>
  );
};

List.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  inner: PropTypes.array,
  visible: PropTypes.bool,
  handler: PropTypes.func,
};
