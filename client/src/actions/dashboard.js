import { API_ORIGIN } from '../config';
import { normalizeResponseErrors } from './utils';

export const authRequest = () => ({
  type: 'AUTH_REQUEST'
});

export const request = () => ({
  type: 'REQUEST'
});

export const FETCH_PROTECTED_DATA_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchProtectedDataSuccess = data => ({
  type: FETCH_PROTECTED_DATA_SUCCESS,
  data
});

export const addEventToState = data => ({
  type: 'ADD_EVENT',
  data
});

export const deleteEventInState = data => ({
  type: 'DELETE_EVENT',
  data
})

export const storeEventRoomInfo = (data) => ({
  type: 'SET_EVENT',
  data
});

// export const storeUserOnJoin = (user) => ({
//   type: 'STORE_USER_TO_EVENT',
//   user
// })

export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const fetchDataError = error => ({
  type: FETCH_DATA_ERROR,
  error
});

export const createEvent = (event_id, token) => dispatch => {
  dispatch(authRequest());
  fetch(`${API_ORIGIN}/api/events`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-auth': token
    },
    body: JSON.stringify(event_id)
  })

    // .then(res => normalizeResponseErrors(res))
    // .then(res => res.json())
    // .then((data) => console.log(data))
    // .then(( data ) => dispatch(updateEventsInState(data)))
    // .catch(err => {
    //   dispatch(fetchDataError(err));
    // });

    // .then(res => console.log(res.json(), 'create res'))

    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      // return test
      return res.json();
    })
    .then((data) => {
      console.log('DATA DATA', data)
      dispatch(addEventToState(data))
    })

    // .then((event) => {
    //   console.log('user signin res', user)
    //   storeAuthInfo(user, dispatch)
    // })
    .catch(err => {
      console.log(err)
      // dispatch(fetchErr(err));
    });
};

export const joinEventRoom = (event_id) => (dispatch, getState) => {
  // dispatch(request());
  const token = getState().auth.authToken;
  const user_id = getState().auth.userID;
  // const event = getState().protected_data.events.filter(event => event._id === event_id).pop()

  // console.log('EVENT om joinRoom function', event)

  fetch(`${API_ORIGIN}/api/events/${event_id}/join/${user_id}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-auth': token
    },
    // body: JSON.stringify(event)
  })

    // .then(res => normalizeResponseErrors(res))
    // .then(res => res.json())
    // .then((data) => console.log(data))
    // .then(( data ) => dispatch(updateEventsInState(data)))
    // .catch(err => {
    //   dispatch(fetchDataError(err));
    // });

    // .then(res => console.log(res.json(), 'create res'))

    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      // return test
      return res.json();
    })
    .then((data) => {
      // console.log('join room data post:', data)
      dispatch(getPopulatedEvent(event_id, token))
      // dispatch(storeEventRoomInfo(event, event_id))

    })

    // .then((event) => {
    //   console.log('user signin res', user)
    //   storeAuthInfo(user, dispatch)
    // })
    .catch(err => {
      console.log(err)
      // dispatch(fetchErr(err));
    });
};

export const getPopulatedEvent = (event_id, token) => (dispatch) => {

  fetch(`${API_ORIGIN}/api/events/${event_id}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'x-auth': token
    },
    // body: JSON.stringify(event)
  })

    // .then(res => normalizeResponseErrors(res))
    // .then(res => res.json())
    // .then((data) => console.log(data))
    // .then(( data ) => dispatch(updateEventsInState(data)))
    // .catch(err => {
    //   dispatch(fetchDataError(err));
    // });

    // .then(res => console.log(res.json(), 'create res'))

    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      // return test
      return res.json();
    })
    .then((data) => {
      // console.log('GET populate eventroom***:', data)
      dispatch(storeEventRoomInfo(data))
      // dispatch(storeEventRoomInfo(data))

    })

    // .then((event) => {
    //   console.log('user signin res', user)
    //   storeAuthInfo(user, dispatch)
    // })
    .catch(err => {
      console.log(err)
      // dispatch(fetchErr(err));
    });

}


// export const createEvent = (event, token) => dispatch => {
//   dispatch(authRequest());
//   fetch(`${API_ORIGIN}/api/events`, {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//       'x-auth': token
//     },
//     body: JSON.stringify(event)
//   })
//     .then(res => normalizeResponseErrors(res))
//     .then(res => res.json())
//     .then((data) => dispatch(fetchProtectedDataSuccess(data)))
//     .catch(err => {
//       dispatch(fetchDataError(err));
//     });
// };



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





export const fetchEvents = () => (dispatch, getState) => {
  const token = getState().auth.authToken;
  return fetch(`${API_ORIGIN}/api/events`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      'x-auth': token
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((data) => dispatch(fetchProtectedDataSuccess(data)))
    .catch(err => {
      dispatch(fetchDataError(err));
    });
};

export const deleteEvent = (id) => (dispatch, getState) => {
  const token = getState().auth.authToken;
  dispatch(authRequest());
  return fetch(`${API_ORIGIN}/api/events/${id}`, {
    method: 'DELETE',
    headers: {
      // auth token as credentials
      'x-auth': token
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => {
      console.log('delete res.json', res)
      // res.json()
    })
    .then(() => {
      console.log('delete data', id)
      dispatch(deleteEventInState(id))
    })
    .catch(err => {
      console.log('delete event err', err)
      dispatch(fetchDataError(err));
    });

  // .then(res => {
  //   if (!res.ok) {
  //     return Promise.reject(res.statusText);
  //   }
  //   // return test
  //   return res.json();
  // })
  // .then((data) => {
  //   console.log('data:', data)
  //   dispatch(deleteEventInState(data))
  // })

  // // .then((event) => {
  // //   console.log('user signin res', user)
  // //   storeAuthInfo(user, dispatch)
  // // })
  // .catch(err => {
  //   console.log(err)
  //   // dispatch(fetchErr(err));
  // });
};