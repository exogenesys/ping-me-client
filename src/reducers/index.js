import { combineReducers } from 'redux';

import data from './dataReducer';
import auth from './authReducer';
import signUpModal from './signUpModalReducer';
import subscription from './subscriptionReducer';

export default combineReducers({
  data,
  auth,
  signUpModal,
  subscription
});
