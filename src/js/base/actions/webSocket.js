import fetch from 'isomorphic-fetch';
import { store } from '../store/configureStore';

const WebSocket = window.WebSocket;

export const WebSocketActions = {
  WS_CONNECT: 'WS_CONNECT',
  WS_OPEN: 'WS_OPEN',
  WS_CLOSE: 'WS_CLOSE',
  WS_ERROR: 'WS_ERROR',
};
export const wsConnect = (url) => ({
  type: WebSocketActions.WS_CONNECT,
  url,
});
export const wsOpen = () => ({
  type: WebSocketActions.WS_OPEN,
});
export const wsClose = () => ({
  type: WebSocketActions.WS_CLOSE,
});
export const wsError = (err) => ({
  type: WebSocketActions.WS_ERROR,
  err,
});

export const WebSocketMessages = {
  WS_MESSAGE_BALANCE: 'WS_MESSAGE_BALANCE',
  WS_MESSAGE_NOTIFICATION_SHOW: 'WS_MESSAGE_NOTIFICATION_SHOW',
  WS_MESSAGE_NOTIFICATION_HIDE: 'WS_MESSAGE_NOTIFICATION_HIDE',
};
export const wsMessageBalance = (msg) => ({
  type: WebSocketMessages.WS_MESSAGE_BALANCE,
  msg,
});
export const wsMessageNotificationShow = (msg) => ({
  type: WebSocketMessages.WS_MESSAGE_NOTIFICATION_SHOW,
  msg,
});
export const wsMessageNotificationHide = () => ({
  type: WebSocketMessages.WS_MESSAGE_NOTIFICATION_HIDE,
});

export const FetchSSIDURL = {
  FETCH_SSIDURL_SEND: 'FETCH_SSIDURL_SEND',
  FETCH_SSIDURL_SUCCESS: 'FETCH_SSIDURL_SUCCESS',
  FETCH_SSIDURL_FAILURE: 'FETCH_SSIDURL_FAILURE',
};
export const fetchSSIDURLSend = (url) => ({
  type: FetchSSIDURL.FETCH_SSIDURL_SEND,
  url,
});
export const fetchSSIDURLSuccess = () => ({
  type: FetchSSIDURL.FETCH_SSIDURL_SUCCESS,
});
export const fetchSSIDURLFailure = (error) => ({
  type: FetchSSIDURL.FETCH_SSIDURL_FAILURE,
  error,
});

export const fetchSSIDURL = (stream) => (dispatch) => {
  dispatch(fetchSSIDURLSend(stream.SSIDURL));
  fetch(stream.SSIDURL, { credentials: 'include', mode: 'no-cors' })
    .then(() => dispatch(fetchSSIDURLSuccess()))
    .catch((error) => dispatch(fetchSSIDURLFailure(error)));
};

export const ws = (stream) => (dispatch) => {
  const WS = new WebSocket(stream.url);
  dispatch(wsConnect(stream.url));
  try {
    WS.onopen = () => {
      dispatch(wsOpen());
    };
    WS.onmessage = (json) => {
      const msg = JSON.parse(json.data);
      switch (msg.event) {
        case 'balance': {
          const mergeData = {
            balance: msg.data.balance / 100,
            cpoints: msg.data.cpoints,
            level: msg.data.level,
            sublevel: msg.data.sublevel,
            'cpoints-progress': msg.data.cpointsProgress,
            'level-progress': msg.data.levelProgress,
            'sublevel-progress': msg.data.sublevelProgress,
          };
          return dispatch(wsMessageBalance(mergeData));
        }
        case 'notification': {
          if (msg.data.context && msg.data.context.ident === 'bigwin') return null;
          return dispatch(wsMessageNotificationShow(msg.data));
        }
        case 'payment': {
          const currency = store.getState().authorization.user.currency;
          const title = 'Ваш счет успешно пополнен на сумму';
          const text = `${(msg.data.bonus + msg.data.amount) / 100} ${currency}`;
          return dispatch(wsMessageNotificationShow({ title, text }));
        }
        default: {
          return null;
        }
      }
    };
    WS.onclose = () => {
      dispatch(wsClose());
    };
    WS.onerror = (error) => {
      dispatch(wsError(error));
    };
  } catch (err) {
    dispatch(wsError(err));
  }
};
