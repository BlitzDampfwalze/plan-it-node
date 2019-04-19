import { API_ORIGIN } from '../config';
// import { normalizeResponseErrors } from './utils';
import { saveAuthToken, clearAuthToken } from '../local-storage';
import { loadAuthToken } from '../local-storage';


export const setHeaderText = () => ({
  type: 'SET_HEADER',
  text: 'example/test text'
})


export const CLEAR_AUTH = 'CLEAR_AUTH';
export const clearAuth = () => ({
  type: CLEAR_AUTH
});

export const setAuthToken = authToken => ({
  type: 'SET_AUTH_TOKEN',
  authToken
});

export const authSuccess = currentUser => ({
  type: 'AUTH_SUCCESS',
  currentUser
});

export const authRequest = () => ({
  type: 'AUTH_REQUEST'
});

export const authError = error => ({
  type: 'AUTH_ERROR',
  error
});

export const signupFail = () => ({
  type: 'SIGNUP_FAIL'
})

export const signupSuccess = () => ({
  type: 'SIGNUP_SUCCESS'
})



const storeAuthInfo = (user, dispatch) => {

  dispatch(setAuthToken(user.token));
  dispatch(authSuccess(user));

  saveAuthToken(user.token);

};

export const signin = user => dispatch => {
  dispatch(authRequest());
  fetch(`${API_ORIGIN}/api/users/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => {
      if (!res.ok) {
        console.log(res, 'CONSOLE.LOG custom message rejection')
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((user) => {
      storeAuthInfo(user, dispatch)
    })
    .catch(err => {
      console.log('error', err)
      window.alert('Incorrect Password or Email')
    });
};


export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(authRequest());
  const token = loadAuthToken();
  return fetch(`${API_ORIGIN}/api/users/refresh`, {
    method: 'POST',
    headers: {
      // Provide existing token as credentials to get a new one
      'x-auth': token
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((user) => {
      storeAuthInfo(user, dispatch)
    })
    .catch(err => {
      // Couldn't get a refresh token because current credentials
      // are invalid or expired, or something else went wrong, clear
      // them and sign out
      dispatch(authError(err));
      dispatch(clearAuth());
      clearAuthToken(token);
    });
};

export const signup = user => dispatch => {
  return fetch(`${API_ORIGIN}/api/users`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => {
      if (!res.ok) {
        dispatch(signupFail())
        return Promise.reject('username/email taken');
      }
      return res.json();
    })
    .then((user) => {
      storeAuthInfo(user, dispatch)
      dispatch(signupSuccess())
    })
    .catch(err => {
      window.alert(err)
    });
};
