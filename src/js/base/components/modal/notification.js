import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { wsMessageNotificationHide } from '../../actions/webSocket';

const TIME_OUT_MSG = 3500;
let timeout;

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { notification } = nextProps;
    if (notification && notification.length) this.show();
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.modalShow) {
      clearTimeout(timeout);
      timeout = setTimeout(() => this.close(), TIME_OUT_MSG);
    }
  }

  show() {
    this.setState({ modalShow: true });
  }

  close() {
    this.setState({ modalShow: false });
    this.props.dispatch(wsMessageNotificationHide());
  }

  render() {
    const { notification } = this.props;
    const { modalShow } = this.state;
    let title;
    let text;

    if (notification && notification.length) {
      title = notification[0].title;
      text = notification[0].text;
    }

    const transitionProps = {
      component: 'div',
      transitionName: 'notification__animate',
      transitionEnterTimeout: 1000,
      transitionLeaveTimeout: 1000,
    };

    const modal = (
      <div className="notification" onTouchMove={this.close}>
        <i className="icon--notification"></i>
        <p className="notification__text">{title}</p>
        <p className="notification__text">{text}</p>
      </div>
    );

    const notificationDiv = modalShow ? modal : null;

    return (
      <div>
        <ReactCSSTransitionGroup {...transitionProps}>
          {notificationDiv}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

Notification.propTypes = {
  dispatch: PropTypes.func,
  notification: PropTypes.array,
};

const select = (state) => ({
  notification: state.notification,
});

export default connect(select)(Notification);
