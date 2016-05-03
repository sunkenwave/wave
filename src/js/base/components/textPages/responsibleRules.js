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
    const lang = window.data.lang;
    const page = responsibleRules[path];
    const pageLang = page ? page[lang] : '';
    if (!page || !pageLang || pageLang.error) {
      this.props.dispatch(loadResponsibleRules(path, lang));
    }
  }

  render() {
    const { responsibleRules, routing } = this.props;
    const path = routing.replace(/\//g, '');
    const page = responsibleRules[path];
    const pageLang = page ? page[window.data.lang] : '';
    let tmp;

    if (page && pageLang && !pageLang.error) {
      tmp = decodeHtmlEntities(pageLang.textPage.description);
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
