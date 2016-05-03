import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { translate } from './../translation/transform';
import { setVisibilityNavigation } from '../../actions/navigation';
import { fetchLogout } from '../../actions/logout';

import BalanceContainer from './../templates/balanceContainer';
import StatusContainer from './../templates/statusContainer';
import MenuNavigation from './../menu/menuNavigation';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.logout = this.logout.bind(this);
  }
  shouldComponentUpdate(nextProps) {
    return !!nextProps.user;
  }

  logout(e) {
    e.preventDefault();
    this.props.dispatch(fetchLogout());
  }

  handleClick(e) {
    e.preventDefault();
    document.getElementById('sh_button').click();
    this.props.dispatch(setVisibilityNavigation());
    document.body.scrollTop = 0;
  }

  render() {
    const { avatar, email, balance, currency, __ } = this.props;
    const propsBalance = {
      name: 'menu-balance',
      topTitle: __('Balance'),
      middleTitle: `${balance} ${currency}`,
      btnText: __('Refill account'),
      btn: true,
    };

    return (
      <nav className="menu">
        <div className="menu__header">
          <div className="menu__avatar">
            <img src={avatar || '/static/mobile/images/base/icon-user.png'} />
          </div>
          <span className="menu__username">{email}</span>
        </div>
        <StatusContainer />
        <BalanceContainer {...propsBalance} />
        <MenuNavigation logout={this.logout} />
        <div className="menu-button-wrap" onClick={this.handleClick}>
          <a href="#" className="btn btn--primary btn--support">
            <i className="icon--support"></i>
            <span>{__('Support Team')}</span>
          </a>
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  dispatch: PropTypes.func,
  email: PropTypes.string,
  avatar: PropTypes.string,
  balance: PropTypes.number,
  currency: PropTypes.string,
  locale: PropTypes.string,
  __: PropTypes.func,
};

const select = (state) => ({
  user: state.authorization.user,
  locale: state.locale,
});

export default connect(select)(translate(Nav));
