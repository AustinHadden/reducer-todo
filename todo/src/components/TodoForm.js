import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/reducer';


const TodoForm = () => {
    const [{todo}, dispatch] = useReducer(reducer, initialState);
    const [newTodo, setNewTodo] = useState("");
  
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: "ADD_NEW_TODO", payload: newTodo});
        console.log('new todo', todo);
        setNewTodo("");
    };
  
    const handleChanges = e => {
        setNewTodo(e.target.value);
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="item">New Todo</label>
          <input
            type="text"
            name="item"
            id="item"
            value={newTodo}
            onChange={handleChanges}
          />
          <button>Add Todo</button>
        </form>
      );
    }
  
  
  export default TodoForm;