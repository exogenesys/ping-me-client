import { combineReducers } from "redux";

import data from "./dataReducer";
import auth from "./authReducer";
import signUpModal from "./signUpModalReducer";

export default combineReducers({
  data,
  auth,
  signUpModal
});
