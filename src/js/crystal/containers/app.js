import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { translate } from './../../base/components/translation/transform';
import { setVisibilityNavigation } from '../../base/actions/navigation';
import { ws, fetchSSIDURL } from '../../base/actions/webSocket';

import Header from '../../base/components/base/header';
import { Container } from '../../base/components/base/container';
import Nav from '../../base/components/base/nav';
import Notification from '../../base/components/modal/notification';
import ChooseLangBox from '../components/translation/chooseLang';

let delayWS = 500;
let delayFetch = 500;
let timeoutWS;
let timeoutFetch;

class App extends Component {
  constructor(props) {
    super(props);
    this.triggerNav = this.triggerNav.bind(this);
  }

  componentDidMount() {
    const { dispatch, user, stream } = this.props;

    if (user && stream) {
      dispatch(fetchSSIDURL(stream));
    }
  }

  componentWillReceiveProps(nextProps) {
    const { dispatch, user, stream } = nextProps;

    if (user && stream) {
      if (stream.cookie) {
        if (!stream.connected) {
          clearTimeout(timeoutWS);
          timeoutWS = setTimeout(() => dispatch(ws(stream)), delayWS);
          delayWS *= 2;
        }
      } else {
        clearTimeout(timeoutFetch);
        timeoutFetch = setTimeout(() => dispatch(fetchSSIDURL(stream)), delayFetch);
        delayFetch *= 2;
      }
    }
  }

  triggerNav(e) {
    e.preventDefault();
    document.body.scrollTop = 0;
    this.props.dispatch(setVisibilityNavigation());
  }

  render() {
    const { visibleNav, user, routes, location, __ } = this.props;
    const nav = user ? <Nav {...user} /> : null;
    const title = routes[routes.length - 1].name;
    const key = location.pathname;
    // Header back
    const regex = /\/[A-Za-z0-9_-]+/g;
    const match = key.match(regex);
    let url;
    // let direction;
    let langBox = null;

    if (!user && !title && !localStorage.getItem('LanguageCRYST')) {
      langBox = <ChooseLangBox __={__} />;
    }
    if ((match === null) || match.length < 2) {
      url = '/';
    } else {
      url = match[match.length - 2];
    }

    // direction = match ? 'right' : 'left';
    const translation = visibleNav ? 'translate' : '';

    // const transitionProps = {
    //   component: 'div',
    //   className: 'route-transition-group',
    //   transitionName: `route-${direction}`,
    //   transitionEnterTimeout: 500,
    //   transitionLeaveTimeout: 500,
    // };

    return (
      <div className={`wrapper ${translation}`}>
        <a href="#" className="wrapper--trigger-menu" onClick={this.triggerNav}>.</a>
        <Header title={title} url={url} />
        {nav}
        <Notification />
        <Container visibleNav={visibleNav}>
          {this.props.children}
        </Container>
        {langBox}
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.object,
  stream: PropTypes.object,
  visibleNav: PropTypes.bool,
  routes: PropTypes.array,
  location: PropTypes.object,
  children: PropTypes.object,
  __: PropTypes.func,
};

const select = (state) => ({
  visibleNav: state.visibilityNavigation,
  user: state.authorization.user,
  stream: state.stream,
  locale: state.locale,
});

export default connect(select)(translate(App));


// <ReactCSSTransitionGroup {...transitionProps}>
//   <div className='route-inner-wrapper' key={key}>{}</div>
// </ReactCSSTransitionGroup>
