import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import { visibilityNavigation } from './combine/navigation';
import { authorization } from './combine/user';
import { xsrf } from './combine/xsrf';
import { recoverPass, changeForgottenPass } from './combine/password';
import { games } from './combine/game';
import { deposit } from './combine/deposit';
import { paymentSystem } from './combine/payments';
import { creditingOfFunds } from './combine/creditingOfFunds';
import { mainCarousel } from './combine/carousel';
import { loadResponsibleRules } from './combine/info';
import { stream } from './combine/stream';
import { notification } from './combine/notification';
import { coupon } from './combine/coupon';
import { locale } from './combine/locale';

const MainReducer = combineReducers({
  routing: routeReducer,
  visibilityNavigation,
  authorization,
  xsrf,
  recoverPass,
  changeForgottenPass,
  games,
  deposit,
  paymentSystem,
  creditingOfFunds,
  mainCarousel,
  loadResponsibleRules,
  stream,
  notification,
  coupon,
  locale,
});

export default MainReducer;
