import { API_ORIGIN } from '../config';
import { normalizeResponseErrors } from './utils';

export const authRequest = () => ({
  type: 'AUTH_REQUEST'
});


export const FETCH_SCHEDULES_SUCCESS = 'FETCH_SCHEDULES_SUCCESS';
export const fetchSchedulesSuccess = data => ({
  type: FETCH_SCHEDULES_SUCCESS,
  data
});

export const fetchTasksSuccess = data => ({
  type: 'FETCH_TASKS_SUCCESS',
  data
  // tasksByUser
});

export const addItemToSchedule = data => ({
  type: 'ADD_TO_SCHEDULE',
  data
});

export const addTaskToList = data => ({
  type: 'ADD_TO_TASKS',
  data
})

export const updateTasks = data => ({
  type: 'UPDATE_TASKS',
  data
})



export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const fetchDataError = error => ({
  type: FETCH_DATA_ERROR,
  error
});



export const fetchSchedules = (event_id) => (dispatch, getState) => {
  const token = getState().auth.authToken;
  // const event_id = getState().event_room_data.event._id
  return fetch(`${API_ORIGIN}/api/events/${event_id}/schedule`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      'x-auth': token
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((data) => {
      dispatch(fetchSchedulesSuccess(data))
      // fetchTasks(event_id)
    })

    .catch(err => {
      dispatch(fetchDataError(err));
    });
};

export const fetchTasks = (event_id) => (dispatch, getState) => {
  const token = getState().auth.authToken;
  // const event_id = getState().event_room_data.event._id
  return fetch(`${API_ORIGIN}/api/events/${event_id}/tasks`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      'x-auth': token
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((data) => {
      // console.log('TASKS DATA DATA TASKS', data)
      // console.log('DATA from Tasks fetch', data)
      // const Users = [...new Set(data.map(task => task.user.username))]
      // console.log('USERS:::', Users)
      // const tasksByUser = Users.map(user => {
      //   return data.filter(task => task.user.username === user)
      // })
      // console.log('DATA from Tasks fetch', tasksByUser)
      // dispatch(fetchTasksSuccess(tasksByUser))
      dispatch(fetchTasksSuccess(data))
    })
    .catch(err => {
      dispatch(fetchDataError(err));
    });
};

export const createSchedule = (inputs) => (dispatch, getState) => {
  const token = getState().auth.authToken;
  const event_id = getState().event_room.eventID;
  // console.log('inputs:', inputs, 'eventID:', event_id, 'token:', token)
  fetch(`${API_ORIGIN}/api/events/${event_id}/schedule`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-auth': token
    },
    body: JSON.stringify(inputs)

  })

    // .then(res => normalizeResponseErrors(res))
    // .then(res => res.json())
    // .then((data) => console.log(data))
    // .then((data) => dispatch(addItemToSchedule(data)))
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
      // console.log('DATA DATA TASKS', data)
      dispatch(addItemToSchedule(data))
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

export const createTask = (inputs) => (dispatch, getState) => {
  const token = getState().auth.authToken;
  const event_id = getState().event_room.eventID;

  console.log('inputs:', inputs)
  fetch(`${API_ORIGIN}/api/events/${event_id}/tasks/user/${inputs.user}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-auth': token
    },
    body: JSON.stringify(inputs)

  })

    // .then(res => normalizeResponseErrors(res))
    // .then(res => res.json())
    // .then((data) => console.log(data))
    // .then((data) => dispatch(addItemToSchedule(data)))
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
      console.log('Task DATA dispatching to store:', data)
      dispatch(addTaskToList(data))
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


export const updateTask = (task_id, completion, details) => (dispatch, getState) => {
  const token = getState().auth.authToken;
  const event_id = getState().event_room.eventID;
  console.log('inputs:', completion, 'taskID:', task_id, event_id)
  fetch(`${API_ORIGIN}/api/events/${event_id}/tasks/${task_id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'x-auth': token
    },
    body: JSON.stringify({
      "completed": completion,
      "taskDetails": details
    })

  })

    // .then(res => normalizeResponseErrors(res))
    // .then(res => res.json())
    // .then((data) => console.log(data))
    // .then((data) => dispatch(addItemToSchedule(data)))
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
      console.log('TASK PUT DATA', data)
      dispatch(updateTasks(data))
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