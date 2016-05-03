import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { DefaultContainer } from '../templates/defaultContainer';
import { loadGame } from '../../actions/game';

const project = data.project.slice(0, -6);
const newGames = require(`../../../${project}/components/games/gamesData.js`).newGames;
const topGames = require(`../../../${project}/components/games/gamesData.js`).topGames;

class PopularGames extends Component {
  componentWillMount() {
    const { gamesData } = this.props;

    if (!gamesData) {
      this.props.dispatch(loadGame());
    }
  }

  render() {
    const { gamesData, user, routeParams } = this.props;
    const routeID = routeParams.id;
    let data;
    let games;

    switch (routeID) {
      case 'new':
        data = newGames;
        break;
      case 'top5':
        data = topGames;
        break;
      case 'all':
      default:
        data = gamesData;
        break;
    }

    if (data) {
      games = data.map((game, i) => {
        let url;
        const cashLink = <Link to="cash">.</Link>;
        const registrationLink = <Link to="registration">.</Link>;
        const defaultLink = <a href={game.attributes['play-url']}>.</a>;

        if (user) {
          if (user.balance) {
            url = defaultLink;
          } else {
            url = cashLink;
          }
        } else {
          url = registrationLink;
        }

        const gameOne = {
          url,
          container: 'game',
          img: game.attributes.thumb,
          name: game.attributes.name,
        };

        return <DefaultContainer {...gameOne} key={i} />;
      });
    }

    return (
      <div className="games-section">
        <div className="games-section__body">
          {games}
        </div>
      </div>
    );
  }
}

PopularGames.propTypes = {
  dispatch: PropTypes.func,
  gamesData: PropTypes.array,
  user: PropTypes.object,
  routeParams: PropTypes.object,
};

const select = (state) => ({
  gamesData: state.games.data,
  user: state.authorization.user,
});

export default connect(select)(PopularGames);
