import { WebSocketMessages } from '../../actions/webSocket';

export function notification(state = [], action) {
  switch (action.type) {
    case WebSocketMessages.WS_MESSAGE_NOTIFICATION_SHOW:
      return [...state, action.msg];
    case WebSocketMessages.WS_MESSAGE_NOTIFICATION_HIDE:
      return state.slice(1);
    default:
      return state;
  }
}
