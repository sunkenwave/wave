import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { setVisibilityNavigation } from '../../actions/navigation';

class ListInner extends Component {
  constructor(props) {
    super(props);
    this.triggerNav = this.triggerNav.bind(this);
  }

  triggerNav() {
    document.body.scrollTop = 0;
    this.props.dispatch(setVisibilityNavigation());
  }

  render() {
    const { title, icon, link } = this.props;

    return (
      <li className="menu__navigation-inner-item" onClick={this.triggerNav}>
        <Link className="menu__navigation-inner-item--link" to={link}>
          <div className="menu__icon__align">
            <i className={`menu__icon ${icon}`}></i>
          </div>
          <span>{title}</span>
        </Link>
      </li>
    );
  }
}

ListInner.propTypes = {
  dispatch: PropTypes.func.isRequired,
  title: PropTypes.string,
  icon: PropTypes.string,
  link: PropTypes.string,
};

export default connect()(ListInner);
