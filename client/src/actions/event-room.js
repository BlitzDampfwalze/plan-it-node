import { API_ORIGIN } from '../config';
import { normalizeResponseErrors } from './utils';

export const fetchSchedulesSuccess = data => ({
  type: 'FETCH_SCHEDULES_SUCCESS',
  data
});

export const fetchTasksSuccess = data => ({
  type: 'FETCH_TASKS_SUCCESS',
  data
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

export const deleteTaskInState = data => ({
  type: 'DELETE_TASK',
  data
})

export const fetchDataError = error => ({
  type: 'FETCH_DATA_ERROR',
  error
});


export const fetchSchedules = (event_id) => (dispatch, getState) => {
  const token = getState().auth.authToken;
  return fetch(`${API_ORIGIN}/api/events/${event_id}/schedule`, {
    method: 'GET',
    headers: {
      // Provide auth token as credentials
      'x-auth': token
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((data) => {
      dispatch(fetchSchedulesSuccess(data))
    })

    .catch(err => {
      dispatch(fetchDataError(err));
    });
};

export const fetchTasks = (event_id) => (dispatch, getState) => {
  const token = getState().auth.authToken;
  return fetch(`${API_ORIGIN}/api/events/${event_id}/tasks`, {
    method: 'GET',
    headers: {
      // Provide auth token as credentials
      'x-auth': token
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((data) => {
      dispatch(fetchTasksSuccess(data))
    })
    .catch(err => {
      dispatch(fetchDataError(err));
    });
};

export const createSchedule = (inputs) => (dispatch, getState) => {
  const token = getState().auth.authToken;
  const event_id = getState().event_room.eventID;
  fetch(`${API_ORIGIN}/api/events/${event_id}/schedule`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-auth': token
    },
    body: JSON.stringify(inputs)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      dispatch(addItemToSchedule(data))
    })
    .catch(err => {
      window.alert(err)
    });
};

export const createTask = (inputs) => (dispatch, getState) => {
  const token = getState().auth.authToken;
  const event_id = getState().event_room.eventID;
  fetch(`${API_ORIGIN}/api/events/${event_id}/tasks/user/${inputs.user}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-auth': token
    },
    body: JSON.stringify(inputs)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      dispatch(addTaskToList(data))
    })
    .catch(err => {
      window.alert(err)
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
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then((data) => {
      console.log('TASK PUT DATA', data)
      dispatch(fetchTasks(event_id))
    })
    .catch(err => {
      window.alert(err)
    });
};

export const deleteTask = (id) => (dispatch, getState) => {
  const token = getState().auth.authToken;
  const event_id = getState().event_room.eventID;
  return fetch(`${API_ORIGIN}/api/events/${event_id}/tasks/${id}`, {
    method: 'DELETE',
    headers: {
      // auth token as credentials
      'x-auth': token
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(() => { dispatch(deleteTaskInState(id)) })
    .catch(err => {
      console.log('delete event err', err)
    });
};