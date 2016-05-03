import { SET_VISIBILITY_NAVIGATION } from '../../actions/navigation';

export function visibilityNavigation(state = false, action) {
  switch (action.type) {
    case SET_VISIBILITY_NAVIGATION:
      return !state;
    default:
      return state;
  }
}
