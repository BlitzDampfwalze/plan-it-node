import jwtDecode from "jwt-decode";

import { API_ORIGIN } from '../config';
import { normalizeResponseErrors } from './utils';
import { saveAuthToken, clearAuthToken } from '../local-storage';

const TOKEN = 'authToken'
const ID = 'id'


export const setHeaderText = () => ({
  type: 'SET_HEADER',
  text: 'example/test text'
})

// export const signIn = () => ({
//   type: 'SIGN_IN',

// })

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



const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  console.log('decodedToken', decodedToken)
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken.user));
  // dispatch(logSession({ user: decodedToken.username }));
  saveAuthToken(authToken);
};

export const signin = user => dispatch => {
  // dispatch(request());
  fetch('/api/users/login', {
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
      // let test = res.json();
      // console.log(test, "test")
      // return test
      return res.json();
    })
    .then((user) => {
      console.log('user sign', user)
      storeAuthInfo(user.token, dispatch)
    })
    .catch(err => {
      console.log(err)
      // dispatch(fetchErr(err));
    });
};


export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(authRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_ORIGIN}/api/users/refresh`, {
    method: 'POST',
    headers: {
      // Provide our existing token as credentials to get a new one
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ token }) => storeAuthInfo(token, dispatch))
    .catch(err => {
      // We couldn't get a refresh token because our current credentials
      // are invalid or expired, or something else went wrong, so clear
      // them and sign us out
      dispatch(authError(err));
      dispatch(clearAuth());
      clearAuthToken(authToken);
    });
};

// Persist users who login
// export const logSession = user => dispatch => {
//   fetch(`${API_ORIGIN}/auth/userLoggedIn`, {
//     method: "POST",
//     mode: "cors",
//     headers: {
//       "content-type": "application/json"
//     },
//     body: JSON.stringify(user)
//   })
//     .then(res => {
//       if (!res.ok) {
//         return Promise.reject(res.statusText);
//       }
//       return res.json();
//     })
//     .then(res => {
//       dispatch(chatUsers(res.loggedIn));
//     });
// };

// export const signup = user => dispatch =>
//   {
//     //dispatch(request());
//     const userError = 'username/email taken';
//     fetch('/api/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json; charset=utf-8'
//       },
//       body: JSON.stringify(user)
//     })
//       .then(res => {
//         if (res.ok) {
//           return res.json();
//         }
//         return Promise.reject(userError);
//       })
//       .then(
//         ({authToken}) => storeAuthInfo(authToken, dispatch)
//         // ({authToken}) => storeAuthInfo(authToken.token, dispatch)
//       ////  previous alternative method:
//       //   user => {
//       //   console.log(user);
//       //   localStorage.setItem(TOKEN, user.token)
//       //   localStorage.setItem(ID, user.id)
//       //   window.location = '/dashboard'
//       // }
//       )
//       .catch(err => {
//         window.alert(err);
//         // dispatch(fetchErr(err));
//       });
//   };



///////
// export const fetchEvents = () => dispatch => {
//   dispatch(request());
//   fetch(`${API_ORIGIN}/videos/search/${term}`, {
//     mode: "cors",
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       Authorization: `Bearer ${token}`
//     }
//   })
//     .then(res => {
//       if (!res.ok) {
//         return Promise.reject(res.statusText);
//       }
//       return res.json();
//     })
//     .then(res => {
//       dispatch(appendResults(res.response.body));
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };
///////

// componentDidMount(){
//   this.loadEventsFromApi();
// }
// loadEventsFromApi(){
//   fetch('/api/events')
//   .then(results => {
//     console.log(results);
//     return results.json();
//   })
//   .then(data => {
//     this.setState({
//       events: data.map((i) => i)
//     })
//     console.log(data);
//   })
// }