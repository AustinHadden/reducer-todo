

export const initialState =  [
    {
      task: "Learn about reducers",
      completed: false,
      id: 1
    },
    {
      task: "Get Ziploc Bags",
      completed: false,
      id: 2
    }
  ]
;

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_TODO":
      const newTodo = {
        task: action.payload,
        completed: false,
        id: Date.now()
      };      
      return [ ...state, newTodo ];      
    case "TOGGLE_COMPLETE":
            return [                
                 ...state.map(todo => {
                  //console.log("Completed Toggle", todo.completed);
                  if (todo.id === action.payload) {
                    return {
                      ...todo,
                      completed: !todo.completed
                    };
                  } else {
                    return todo;
                  }
                }) ];
                case "CLEAR_COMPLETED":
                    return state.filter(item => !item.completed);
    default:
      return state;
  }
};
