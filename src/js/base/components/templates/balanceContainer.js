import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';

import { setVisibilityNavigation } from '../../actions/navigation';

class BalanceContainer extends Component {
  constructor(props) {
    super(props);
    this.toLink = this.toLink.bind(this);
  }

  toLink(e) {
    e.preventDefault();
    if (this.props.name === 'menu-balance') {
      this.props.dispatch(setVisibilityNavigation());
    }
    this.props.dispatch(routeActions.push('cash'));
  }

  render() {
    const {
      name,
      topTitle,
      middleTitle,
      bottomText,
      bottomTextColor,
      btnText,
      url,
      btn,
    } = this.props;

    let classNameLink;

    if (url) {
      classNameLink = `balance-container__url ${bottomTextColor}`;
    } else {
      classNameLink = btn ? 'btn btn--primary' : '';
    }

    return (
      <div className={`balance-container ${name}`}>
        <div className="balance-container__border">
          <span className="balance-container__name">{topTitle}</span>
          <h4 className="balance-container__title">{middleTitle}</h4>
          <p className={`balance-container__text ${bottomTextColor}`}>{bottomText}</p>
          <a onClick={this.toLink} className={classNameLink} href="#">{btnText}</a>
        </div>
      </div>
    );
  }
}

BalanceContainer.propTypes = {
  dispatch: PropTypes.func,
  name: PropTypes.string,
  topTitle: PropTypes.string,
  middleTitle: PropTypes.string,
  bottomText: PropTypes.string,
  bottomTextColor: PropTypes.string,
  btnText: PropTypes.string,
  url: PropTypes.string,
  btn: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
};

export default connect()(BalanceContainer);
