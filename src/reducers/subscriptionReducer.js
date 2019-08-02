import { COMPLETE_SUBSCRIPTION, WAIT_SUBSCRIPTION, REPORT_ERROR_SUBSCRIPTION } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case COMPLETE_SUBSCRIPTION:
      return action.payload;
    case WAIT_SUBSCRIPTION:
      return action.payload;
    case REPORT_ERROR_SUBSCRIPTION:
        return action.payload;
    default:
        return state;
  }
};
