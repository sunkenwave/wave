import { WebSocketActions, FetchSSIDURL } from '../../actions/webSocket';

let initialStream;

if (window.data) {
  const regex = /^(http)(s)?/;
  const urlFromWindow = `${window.data.global.streamURL}/stream/websocket`;
  const SSIDURL = window.data.global.streamSSIDURL;

  const url = urlFromWindow.replace(regex, (match, a, b) => (b ? 'wss' : 'ws'));

  initialStream = { url, SSIDURL };
}

export function stream(state = {
  ...initialStream,
  connected: false,
  cookie: false,
}, action) {
  switch (action.type) {
    case WebSocketActions.WS_OPEN:
      return Object.assign({}, state, { connected: true });
    case WebSocketActions.WS_CLOSE:
    case WebSocketActions.WS_ERROR:
      return Object.assign({}, state, { connected: false });
    case FetchSSIDURL.FETCH_SSIDURL_SUCCESS:
      return Object.assign({}, state, { cookie: true });
    case FetchSSIDURL.FETCH_SSIDURL_FAILURE:
      return Object.assign({}, state, { cookie: false });
    default:
      return state;
  }
}
