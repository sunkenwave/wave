import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
import { translate } from './../../translation/transform';

import { DefaultHeader, HeaderNested, HeaderLogin } from './headers';

import { setVisibilityNavigation } from '../../../actions/navigation';

class Header extends Component {
  handleLogin(e) {
    e.preventDefault();
    document.body.scrollTop = 0;
    this.props.dispatch(setVisibilityNavigation());
  }

  handleOtherPage(e, url) {
    e.preventDefault();
    this.props.dispatch(routeActions.push(url));
  }

  render() {
    const { user, path, title, url, __ } = this.props;
    const handleLogin = (e) => this.handleLogin(e);
    const handleOtherPage = (e) => this.handleOtherPage(e, url);
    let header;

    const propsHeaderNested = {
      title,
      cb: handleOtherPage,
      __,
    };

    if (user) {
      const propsHeaderLogin = {
        balance: user.balance,
        currency: user.currency,
        cb: handleLogin,
        __,
      };

      if (path === '/') {
        header = <HeaderLogin {...propsHeaderLogin} />;
      } else {
        header = <HeaderNested {...propsHeaderNested} />;
      }
    } else {
      if (path === '/') {
        header = <DefaultHeader __={__} />;
      } else {
        header = <HeaderNested {...propsHeaderNested} />;
      }
    }

    return header;
  }
}

Header.propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.object,
  path: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  locale: PropTypes.string,
  __: PropTypes.func,
};

const select = (state) => ({
  user: state.authorization.user,
  path: state.routing.location.pathname,
  locale: state.locale,
});

export default connect(select)(translate(Header));
