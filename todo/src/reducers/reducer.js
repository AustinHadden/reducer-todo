

export const initialState = {
  todo: [
    {
      task: "Learn about reducers",
      completed: false,
      id: 3892987589
    },
    {
        task: "Get Ziploc Bags",
        completed: false,
        id: 38929875564
      }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_TODO":
      const newTodo = {
        task: action.payload,
        completed: false,
        id: Date.now()
      };      
      const newState = { ...state, todo: [ ...state.todo, newTodo ] };
      console.log(newState);
      return newState;
    case "TOGGLE_COMPLETE":
      for (let i = 0; i < state.todo.length; i++) {
        if (state.todo[i].id === action.payload) {
          state.todo[i].completed = !state.todo[i].completed;
        }
      }
      return state;
    default:
      return state;
  }
};
