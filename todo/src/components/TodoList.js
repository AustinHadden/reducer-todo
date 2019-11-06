import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducers/reducer';

import Todo from "./Todo";

const TodoList = () => {
    const [{todo}, dispatch] = useReducer(reducer, initialState);

    const toggleCompleted = id => {
        dispatch({ type: "TOGGLE_COMPLETE", payload: id})
        //console.log(data[0].completed);
    }
  return (
    <div className="todo-list">
      {todo.map(item => (
        <Todo key={item.id} item={item} toggleCompleted={toggleCompleted} />
      ))}
      <button className="clear-btn" >
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;