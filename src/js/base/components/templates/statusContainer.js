import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { translate } from '../translation/transform';


class StatusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressLevel: 0,
      progressPoint: 0,
    };
  }

  componentDidMount() {
    this.updateStatus(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.updateStatus(nextProps);
    }
  }

  shouldComponentUpdate(nextProps) {
    return !!nextProps.user;
  }

  updateStatus(props) {
    const { user } = props;
    const progressLevel = user['sublevel-progress'].current / user['sublevel-progress'].max * 100;
    const progressPoint = user['cpoints-progress'].current / user['cpoints-progress'].max * 100;
    this.setState({ progressLevel, progressPoint });
  }

  render() {
    const { user, __ } = this.props;
    const stars = [];
    let countStar = user.sublevel;

    while (countStar--) {
      stars.push(<i className="status-container__star" key={countStar}></i>);
    }

    const classNameLevel =
      'status-container__line-progress ' +
      'status-container__line-progress--stat';

    const classNamePoint =
      'status-container__line-progress ' +
      'status-container__line-progress--point';

    return (
      <div className="status-container">
        <div className="status-container__section">
          <span className="status-container__name--text">{user.level.title}</span>
          <div className="status-container__stars">
            {stars}
          </div>
          <div className="status-container__line">
            <div style={{ width: `${this.state.progressLevel}%` }} className={classNameLevel}></div>
          </div>
        </div>
        <div className="status-container__section">
          <span className="status-container__name--text">{__('Points:')} {`${user.cpoints}`}</span>
          <div className="status-container__line">
            <div style={{ width: `${this.state.progressPoint}%` }} className={classNamePoint}></div>
          </div>
        </div>
      </div>
    );
  }
}

StatusContainer.propTypes = {
  user: PropTypes.object,
  locale: PropTypes.string,
  __: PropTypes.func,
};

const select = (state) => ({
  user: state.authorization.user,
  locale: state.locale,
});

export default connect(select)(translate(StatusContainer));
