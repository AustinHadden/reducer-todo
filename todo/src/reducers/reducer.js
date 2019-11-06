

export const initialState = {
  todo: [
    {
      task: "Learn about reducers",
      completed: false,
      id: 3892987589
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
      console.log(newTodo)
      return { ...state, todo: [ ...state.todo, newTodo ] };
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
