import { API_ORIGIN } from '../config';
import { normalizeResponseErrors } from './utils';
import { saveAuthToken, clearAuthToken } from '../local-storage';
import { loadAuthToken } from '../local-storage';
import { SubmissionError } from 'redux-form';


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
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((user) => {
      console.log('user signin res', user)
      storeAuthInfo(user, dispatch)
    })
    .catch(err => {
      console.log(err)
    });
};


export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(authRequest());
  const token = loadAuthToken();
  return fetch(`${API_ORIGIN}/api/users/refresh`, {
    method: 'POST',
    headers: {
      // Provide our existing token as credentials to get a new one
      'x-auth': token
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((user) => {
      console.log('refresh token', user)
      storeAuthInfo(user, dispatch)
    })
    .catch(err => {
      // We couldn't get a refresh token because our current credentials
      // are invalid or expired, or something else went wrong, so clear
      // them and sign us out
      dispatch(authError(err));
      // dispatch(clearAuth());
      // clearAuthToken(token);
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
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      const { reason, message, location } = err;
      if (reason === 'ValidationError') {
        // Convert ValidationErrors into SubmissionErrors for Redux Form
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
    });
};
