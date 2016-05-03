import React, { Component, PropTypes } from 'react';

const project = window.data.project.slice(0, -6);
const i18next = require(`../../../${project}/containers/i18n.js`).default;

export const translate = ComposedComponent => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      __: function __(string) {
        return i18next.t(string, { defaultValue: string, lngs: [window.data.lang] });
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    const { locale } = nextProps;

    if (locale && locale !== window.data.lang) {
      this.setState({
        __: function __(string) {
          return i18next.t(string, { defaultValue: string, lngs: [locale] });
        },
      });
    }
  }

  render() {
    return (<ComposedComponent {...this.props} {...this.state} />);
  }
};

translate.propTypes = {
  locale: PropTypes.string,
};
