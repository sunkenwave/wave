import React, { PropTypes } from 'react';
import Slider from 'react-slick';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const slideOne = ({ thumbsLarge, playUrl }, user, i) => {
  let url;

  if (user) {
    if (user.balance) {
      url = <a className="main-carousel__full-size" href={playUrl}>.</a>;
    } else {
      url = <Link className="main-carousel__full-size" to="cash">.</Link>;
    }
  } else {
    url = <Link className="main-carousel__full-size" to="registration">.</Link>;
  }

  return (
    <div className="main-carousel__item" key={i}>
      <img className="main-carousel__item-img" src={thumbsLarge} />
      { url }
    </div>
  );
};

const settingsMainCarousel = {
  arrows: false,
  centerPadding: '40px',
  slidesToShow: 1,
  dots: true,
  infinite: true,
  speed: 500,
};

const project = window.data.project.slice(0, -6);
const MainCarousel = ({ user, locale }) => {
  let slidesData;
  const slides = [];

  if (user) {
    slidesData = require(`../../../${project}/components/carousels/dataMainCarousel.js`).userData;
  } else if (locale === 'ru') {
    slidesData = require(`../../../${project}/components/carousels/dataMainCarousel.js`).regDataRU;
  } else if (locale === 'en') {
    slidesData = require(`../../../${project}/components/carousels/dataMainCarousel.js`).regDataEN;
  }

  slidesData.forEach((slide, i) => {
    slides.push(slideOne(slide, user, i));
  });

  return (
    <div className="main-carousel">
      <Slider {...settingsMainCarousel}>
        {slides}
      </Slider>
    </div>
  );
};

MainCarousel.propTypes = {
  user: PropTypes.object,
  locale: PropTypes.string,
};

slideOne.propTypes = {
  thumbsLarge: PropTypes.string,
  playUrl: PropTypes.string,
  user: PropTypes.object,
};

const select = (state) => ({
  user: state.authorization.user,
  locale: state.locale,
});

export default connect(select)(MainCarousel);
