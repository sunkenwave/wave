import { LoadGames } from '../../actions/game';

export function games(state = {
  data: null,
  error: false,
}, action) {
  switch (action.type) {
    case LoadGames.LOAD_GAMES_SUCCESS:
      return Object.assign({}, state, {
        data: action.games,
        error: false,
      });
    case LoadGames.LOAD_GAMES_FAILURE:
      return Object.assign({}, state, {
        data: null,
        error: true,
      });
    case LoadGames.LOAD_GAMES_GET:
    default:
      return state;
  }
}
