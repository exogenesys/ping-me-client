import { todosRef, authRef, provider, subscribeTo, unSubscribeTo, getSubscriptionData } from '../config/firebase';
import {
  FETCH_TODOS, FETCH_USER, OPEN_SIGN_UP_MODAL, CLOSE_SIGN_UP_MODAL, COMPLETE_SUBSCRIPTION, WAIT_SUBSCRIPTION, REPORT_ERROR_SUBSCRIPTION, NOT_SUBSCRIBED
} from './types';

export const addToDo = (newToDo, uid) => async () => {
  todosRef
    .child(uid)
    .push()
    .set(newToDo);
};

export const completeToDo = (completeToDoId, uid) => async () => {
  todosRef
    .child(uid)
    .child(completeToDoId)
    .remove();
};

export const fetchToDos = uid => async (dispatch) => {
  todosRef.child(uid).on('value', (snapshot) => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val(),
    });
  });
};

export const fetchUser = () => (dispatch) => {
  authRef.onAuthStateChanged((user) => {
    if (user) {
      dispatch({
        type: FETCH_USER,
        payload: user,
      });
    } else {
      dispatch({
        type: FETCH_USER,
        payload: null,
      });
    }
  });
};

export const signIn = () => () => {
  authRef
    .signInWithPopup(provider)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};

export const signOut = () => () => {
  authRef
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      console.log(error);
    });
};

export const openSignUpModal = () => (dispatch) => {
  dispatch({
    type: OPEN_SIGN_UP_MODAL,
    payload: true,
  });
};

export const closeSignUpModal = () => (dispatch) => {
  dispatch({
    type: CLOSE_SIGN_UP_MODAL,
    payload: false,
  });
};

export const getChannelState = (channelId) => (dispatch) => {
  dispatch({
    type: WAIT_SUBSCRIPTION,
    payload: 'loading'
  })
  getSubscriptionData({
    channelId
  }).then((result) => {
    if(!result.data.error && result.data.message === 'subscribed'){
      dispatch({
        type: COMPLETE_SUBSCRIPTION,
        payload: 'complete'
      })
    } else if(!result.data.error && result.data.message === 'not subscribed'){
      dispatch({
        type: NOT_SUBSCRIBED,
        payload: 'ready'
      })
    } else {
      dispatch({
        type: REPORT_ERROR_SUBSCRIPTION,
        payload: 'failed'
      })
    }
  })
}

export const subscribeChannel = (channelId) => async (dispatch) => {
  dispatch({
    type: WAIT_SUBSCRIPTION,
    payload: 'loading'
  })
  subscribeTo({
    channelId
  }).then((result) => {
    if(!result.error){
      dispatch({
        type: COMPLETE_SUBSCRIPTION,
        payload: 'complete'
      })
    } else {
      dispatch({
        type: REPORT_ERROR_SUBSCRIPTION,
        payload: 'failed'
      })
    }
  })
}

export const unSubscribeChannel = (channelId) => async (dispatch) => {
  dispatch({
    type: WAIT_SUBSCRIPTION,
    payload: 'loading'
  })
  unSubscribeTo({
    channelId: channelId,
  }).then((result) => {
    if(!result.error){
      dispatch({
        type: COMPLETE_SUBSCRIPTION,
        payload: 'ready'
      })
    } else {
      dispatch({
        type: REPORT_ERROR_SUBSCRIPTION,
        payload: 'failed'
      })
    }
  })
}