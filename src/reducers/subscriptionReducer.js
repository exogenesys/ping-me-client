import {
  COMPLETE_SUBSCRIPTION, WAIT_SUBSCRIPTION, REPORT_ERROR_SUBSCRIPTION, NOT_SUBSCRIBED,
} from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case COMPLETE_SUBSCRIPTION:
      return action.payload;
    case WAIT_SUBSCRIPTION:
      return action.payload;
    case REPORT_ERROR_SUBSCRIPTION:
      return action.payload;
    case NOT_SUBSCRIBED:
      return action.payload;
    default:
      return state;
  }
};
