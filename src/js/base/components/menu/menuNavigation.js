import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { setVisibilityNavigation } from '../../actions/navigation';
import { List } from './list';
import { listData } from './listData';

const project = data.project.slice(0, -6);
let LangTab = null;
if (project !== 'vulkan') {
  LangTab = require(`../../../${project}/components/menu/languageTab.js`).default;
}

class MenuNavigation extends Component {
  constructor(props) {
    super(props);
    this.triggerNav = this.triggerNav.bind(this);
    this.state = {
      show: 2,
    };
  }

  trigger(index) {
    this.setState({ show: index });
  }

  triggerNav() {
    document.body.scrollTop = 0;
    this.props.dispatch(setVisibilityNavigation());
  }

  render() {
    const { show } = this.state;
    const { logout } = this.props;
    const lastPosition = 0;
    let handlerFuncLast;

    const menu = listData.map((item, i) => {
      let t = i;
      const handlerFunc = () => this.trigger(t);
      return <List {...item} key={++t} visible={show === ++t} handler={handlerFunc} />;
    });

    if (LangTab) {
      handlerFuncLast = () => this.trigger(lastPosition);
    }

    return (
      <ul className="menu__navigation">
        {menu}
        { LangTab && <LangTab visible={show === lastPosition} handler={handlerFuncLast} /> }
        <li className="menu__navigation-item" onClick={this.triggerNav}>
          <a className="menu__navigation-item--link" href="#" onClick={logout}>
            <div className="menu__icon__align">
              <i className="menu__icon icon-stop"></i>
            </div>
            <span>{__('Sing out')}</span>
          </a>
        </li>
      </ul>
    );
  }
}

MenuNavigation.propTypes = {
  dispatch: PropTypes.func,
  logout: PropTypes.func,
};

export default connect()(MenuNavigation);
