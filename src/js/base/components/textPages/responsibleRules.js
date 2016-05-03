import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { chars } from './chars';

import { loadResponsibleRules } from '../../actions/info';

const decodeHtmlEntities = (str) =>
  str.replace(/&#?(\w+);/g, (match, dec) => {
    let returnDec;
    if (isNaN(dec)) {
      if (chars[dec] !== undefined) {
        returnDec = chars[dec];
      }
    }
    return String.fromCharCode(returnDec);
  });

class Rules extends Component {
  componentWillMount() {
    const { routing, responsibleRules } = this.props;
    const path = routing.replace(/\//g, '');
    if (!responsibleRules[path]) {
      this.props.dispatch(loadResponsibleRules(path));
    }
  }

  render() {
    const { responsibleRules, routing } = this.props;
    const path = routing.replace(/\//g, '');
    let tmp;

    if (responsibleRules[path] && !responsibleRules[path].error) {
      tmp = decodeHtmlEntities(responsibleRules[path].textPage.description);
    }

    return (
      <div className="blue-section">
        <article className="text-article" dangerouslySetInnerHTML={{ __html: tmp }}></article>
      </div>
    );
  }
}

Rules.propTypes = {
  dispatch: PropTypes.func,
  responsibleRules: PropTypes.object,
  routing: PropTypes.string,
};

const select = (state) => ({
  responsibleRules: state.loadResponsibleRules,
  routing: state.routing.location.pathname,
});

export default connect(select)(Rules);
