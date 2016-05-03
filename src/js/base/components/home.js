import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import MainCarousel from './carousels/mainCarousel';
import { TabsContainer } from './carousels/tabs';
import GamesSection from './games/gamesSection';

const project = data.project.slice(0, -6);
const Footer = require(`../../${project}/components/base/footer`).default;

let PromotionSection = null;
if (project === 'vulkan') {
  PromotionSection = require('./templates/promotionSection').PromotionSection;
}

const Home = (props) => {
  const { user } = props;
  const promotion = (!user && PromotionSection) ? <PromotionSection /> : null;
  return (
    <div>
      <MainCarousel />
      <TabsContainer />
      <GamesSection />
      {promotion}
      <Footer />
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.object,
};

const select = (state) => ({
  user: state.authorization.user,
});

export default connect(select)(Home);
