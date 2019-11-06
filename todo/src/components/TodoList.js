import React from 'react';

import Todo from "./Todo";

const TodoList = props => {
    
    console.log(props.todo);
    const toggleCompleted = id => {
        props.dispatch({ type: "TOGGLE_COMPLETE", payload: id})
        //console.log(data[0].completed);
    }

    const clearCompleted = () => {
        props.dispatch({type: "CLEAR_COMPLETED"})
    }

  return (
    <div className="todo-list">
      {props.todo.map(item => (
        <Todo key={item.id} item={item} toggleCompleted={toggleCompleted} />
      ))}
      <button className="clear-btn" onClick={clearCompleted} >
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;