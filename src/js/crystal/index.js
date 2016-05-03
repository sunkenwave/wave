// MODULES
/* react */
import React from 'react';
import ReactDOM from 'react-dom';
/* redux */
import { Provider } from 'react-redux';
/* router */
import { Router, Route, IndexRoute, Redirect } from 'react-router';
/* store */
import { store, history } from '../base/store/configureStore';

// COMPONENTS
import App from './containers/app';

import Home from '../base/components/home';

import Registration from '../base/components/login/registration';
import Login from '../base/components/login/login';

import ProfileMain from '../base/components/profile/profileMain';

import passFirst from '../base/components/rememberPass/passFirst';
import passSecond from '../base/components/rememberPass/passSecond';

import SuccessPass from '../base/components/subscription/subscriptionSuccessPass';
import SubscriptionRememberPass from '../base/components/subscription/subscriptionRememberPass';
import SubscriptionCoupon from '../base/components/subscription/subscriptionCoupon';
import ErrorChangePass from '../base/components/subscription/errorChangePass';
import Success from '../base/components/subscription/subscriptionSuccess';
import Error404 from '../base/components/subscription/subscription404';
import Offline from '../base/components/subscription/subscriptionOffline';

// import VipOpened from '../base/components/Vip/VipOpened';
// import VipClosed from '../base/components/Vip/VipClosed';
// import VipMember from '../base/components/Vip/VipMember';
// import VipClubEnter from '../base/components/Vip/VipClubEnter';

import PopularGames from '../base/components/games/popularGames';

import CashierStepFirst from '../base/components/cash/cashStepFirst';
import CashierStepSecond from '../base/components/cash/cashStepSecond';
import CashierStepThird from '../base/components/cash/cashStepThird';
import Rules from '../base/components/textPages/responsibleRules';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route name="Authorisation" path="login" component={Login} />
        <Route name="Registration" path="registration" component={Registration} />
        <Route name="Profile" path="profile" component={ProfileMain} />
        <Route name="Forgot your password?" path="forgot_pass" component={passFirst} />
        <Route name="New password" path="change_forgotten_pass/:id" component={passSecond} />
        <Route name="New password" path="is_chagne_pass" component={SuccessPass} />
        <Route name="New password" path="send_email" component={SubscriptionRememberPass} />
        <Route name="Refill amount" path="cash" component={CashierStepFirst} />
        <Route name="Payment method" path="cash_choose" component={CashierStepSecond} />
        <Route name="Confirmation" path="cash_pay" component={CashierStepThird} />
        <Route name="Games" path="games/:id" component={PopularGames} />

        <Redirect from="games" to="/" /> {/* Hardcode: otherwise we have 404 */}

        <Route name="Successfully" path="success" component={Success} />
        <Route name="Successfully" path="success_coupon" component={SubscriptionCoupon} />
        <Route name="Terms and Conditions" path="termsandconditions" component={Rules} />
        <Route name="Responsible gaming" path="responsiblegaming" component={Rules} />
        <Route name="Privacy policy" path="privacypolicy" component={Rules} />
        <Route name="Antifraud tools" path="antifraud" component={Rules} />
        <Route name="Fair Gaming" path="fairgaming" component={Rules} />
        <Route name="Error" path="error_change_pass" component={ErrorChangePass} />
        <Route path="offline" component={Offline} />
        {/* br */}
        <Route name="Error" path="*" component={Error404} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
