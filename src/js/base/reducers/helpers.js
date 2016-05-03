export function mergeData(state, value) {
  const newUserData = Object.assign({}, state.user, value);
  return Object.assign({}, state, { user: newUserData });
}
