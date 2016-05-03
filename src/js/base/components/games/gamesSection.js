import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { DefaultContainer } from '../templates/defaultContainer';
import { loadGame } from '../../actions/game';

class GamesSection extends Component {
  constructor(props) {
    super(props);
    this.gamesLoad = this.gamesLoad.bind(this);
    this.state = {
      LOAD_COUNT: 9,
      active: 12,
      moreLoad: true,
    };
  }

  componentWillMount() {
    const { gamesData } = this.props;
    if (!gamesData) {
      this.props.dispatch(loadGame());
    }
  }

  shouldComponentUpdate(props) {
    const { user } = props;
    if (!user && this.state.active !== 12) {
      this.setState({ active: 12 });
      return false;
    }
    return true;
  }

  gamesLoad(e) {
    e.preventDefault();

    const { active, LOAD_COUNT } = this.state;
    const { user } = this.props;
    const countGames = this.props.gamesData.length;
    let moreLoadIn = true;

    if (!user || countGames <= active + LOAD_COUNT) {
      moreLoadIn = false;
    }
    this.setState({ active: active + LOAD_COUNT, moreLoad: moreLoadIn });
  }

  render() {
    const { gamesData, user, __ } = this.props;
    let countGames;
    let games;

    if (gamesData) {
      countGames = gamesData.length;
      games = gamesData.map((game, index) => {
        let url;
        const cashLink = <Link to="cash">.</Link>;
        const registrationLink = <Link to="registration">.</Link>;
        const defaultLink = (<a href={game.attributes['play-url']}>.</a>);

        if (user) {
          if (user.balance) {
            url = defaultLink;
          } else {
            url = cashLink;
          }
        } else {
          url = registrationLink;
        }

        if (index < this.state.active) {
          const gameOne = {
            container: 'game',
            img: game.attributes.thumb,
            name: game.attributes.name,
            url,
          };
          return <DefaultContainer key={index} {...gameOne} />;
        }
        return null;
      });
    }

    const btnLoadMore = (
      <a href="#" className="btn btn--primary btn--load" onClick={this.gamesLoad}>
        {__('download more')}
      </a>
    );
    const loadMoreGames = (this.state.moreLoad && user) ? btnLoadMore : null;

    return (
      <div className="games-section">
        <div className="hr"></div>
        <div className="games-section__heading">
          <h3 className="games-section__title">{__('Games')}</h3>
          <Link className="games-section__show-all" to="games/all">
            {__('Show all')}
            <span className="games-section__show-all--count">{` ${countGames} >`}</span>
          </Link>
        </div>
        <div className="games-section__body">
          {games}
        </div>
        {loadMoreGames}
      </div>
    );
  }
}

GamesSection.propTypes = {
  dispatch: PropTypes.func,
  user: PropTypes.object,
  gamesData: PropTypes.array,
  __: PropTypes.func,
};

const select = (state) => ({
  gamesData: state.games.data,
  user: state.authorization.user,
});

export default connect(select)(GamesSection);
