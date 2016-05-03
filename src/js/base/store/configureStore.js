/* redux */
import { createStore, applyMiddleware } from 'redux';
/* reducers */
import mainReducer from '../reducers';
/* fetch */
import thunkMiddleware from 'redux-thunk';
/* logger */
import createLogger from 'redux-logger';
/* router */
import createHistory from 'history/lib/createHashHistory';
import { syncHistory, UPDATE_LOCATION } from 'redux-simple-router';

const logger = createLogger();
export const history = createHistory();
const historyStore = syncHistory(history);

function seniorMiddleware() {
  return (next) => (action) => {
    const result = next(action);
    const close = document.getElementsByClassName('sh_hico_close');

    if (action && action.type === UPDATE_LOCATION) {
      document.body.scrollTop = 0;
      if (close.length) {
        close[0].click();
        if (close.length) {
          close[0].click();
        }
      }
    }
    return result;
  };
}

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  historyStore,
  logger,
  seniorMiddleware
)(createStore);

export const store = createStoreWithMiddleware(mainReducer);
historyStore.listenForReplays(store);
