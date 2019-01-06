// import { SubmissionError } from 'redux-form';

// import { API_ORIGIN } from '../config';
// import { normalizeResponseErrors } from './utils';

// export const signup = user => dispatch => {
//   return fetch(`${API_ORIGIN}/api/users`, {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json'
//     },
//     body: JSON.stringify(user)
//   })
//     .then(res => normalizeResponseErrors(res))
//     .then(res => res.json())
//     .catch(err => {
//       const { reason, message, location } = err;
//       if (reason === 'ValidationError') {
//         // Convert ValidationErrors into SubmissionErrors for Redux Form
//         return Promise.reject(
//           new SubmissionError({
//             [location]: message
//           })
//         );
//       }
//     });
// };
