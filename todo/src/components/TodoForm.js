import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/reducer';

import TodoList from "./TodoList";


const TodoForm = () => {
    const [todo, dispatch] = useReducer(reducer, initialState);
    const [newTodo, setNewTodo] = useState("");
  
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: "ADD_NEW_TODO", payload: newTodo});
        //console.log('new todo', todo);
        setNewTodo("");
    };
  
    const handleChanges = e => {
        setNewTodo(e.target.value);
      };
    
      return (
          <div>
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
        
            <TodoList todo={todo} dispatch={dispatch}/>
        </div>
      );
    }
  
  
  export default TodoForm;