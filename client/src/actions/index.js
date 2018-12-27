// import { API_ORIGIN } from '../../../config/config'

export const setHeaderText = () => ({
  type: 'SET_HEADER',
  text: 'example/test text'
})
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