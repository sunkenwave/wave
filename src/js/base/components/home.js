import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import MainCarousel from './carousels/mainCarousel';
import { TabsContainer } from './carousels/tabs';
import GamesSection from './games/gamesSection';
import { translate } from '../components/translation/transform';

const project = window.data.project.slice(0, -6);
const Footer = require(`../../${project}/components/base/footer`).default;

let PromotionSection = null;
if (project === 'vulkan') {
  PromotionSection = require('./templates/promotionSection').PromotionSection;
}

const Home = (props) => {
  const { user, __ } = props;
  const promotion = (!user && PromotionSection) ? <PromotionSection __={__} /> : null;
  return (
    <div>
      <MainCarousel />
      <TabsContainer __={__} />
      <GamesSection __={__} />
      {promotion}
      <Footer />
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.object,
  locale: PropTypes.string,
  __: PropTypes.func,
};

const select = (state) => ({
  user: state.authorization.user,
  locale: state.locale,
});

export default connect(select)(translate(Home));
