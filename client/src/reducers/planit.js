// const todo = (state, action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return newState
//     case 'TOGGLE_TODO':

//     default:
//       return state
//   }
// }

export default (state = [], action) => {
  switch (action.type) {

    case 'ADD_TODO':
      const newState = {
        id: action.id,
        text: action.text,
        completed: false
      };
      console.log("New State");
      console.log(newState);
      return [
        ...state,
        newState
      ]

    case 'TOGGLE_TODO':
      return state.map(t => {
        if (state.id !== action.id) {
          return state
        }
        return {
          ...state,
          completed: !state.completed
        }
      }
      )
      
    default:
      return state
  }
}


