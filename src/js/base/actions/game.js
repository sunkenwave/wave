import { wrapFetch } from './helpers';

export const LoadGames = {
  LOAD_GAMES_GET: 'LOAD_GAMES_GET',
  LOAD_GAMES_SUCCESS: 'LOAD_GAMES_SUCCESS',
  LOAD_GAMES_FAILURE: 'LOAD_GAMES_FAILURE',
};

export function loadGameGet() {
  return {
    type: LoadGames.LOAD_GAMES_GET,
  };
}

export function loadGameSuccess(games) {
  return {
    type: LoadGames.LOAD_GAMES_SUCCESS,
    games,
  };
}

export function loadGameFailure(error) {
  return {
    type: LoadGames.LOAD_GAMES_FAILURE,
    error,
  };
}

export function loadGame() {
  return function funcLoadGame(dispatch) {
    const handler = {};

    handler.path = 'games?filter[category]=mobile';

    handler.send = function funcSend() {
      dispatch(loadGameGet());
    };
    handler.success = function funcSuccess(data) {
      dispatch(loadGameSuccess(data.data));
    };
    handler.failure = function funcFailure(error) {
      dispatch(loadGameFailure(error));
    };

    wrapFetch(dispatch, handler);
  };
}
