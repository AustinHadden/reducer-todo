import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/reducer';


const TodoForm = () => {
    const [{todo}, dispatch] = useReducer(reducer, initialState);
    const [newTodo, setNewTodo] = useState("");
  
    // handleChanges = e => {
    //   // update state with each keystroke
    //   setState({
    //     newTodo: e.target.value
    //   });
    // };
  
    
    // handleSubmit = e => {
    //   e.preventDefault();
    //   console.log("it's working!");
    //   // add our typed in item to the grocery list!
    //   props.addTodo(state.newTodo);
    //   setState({ newTodo: "" });
    // };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: "ADD_NEW_TODO", payload: newTodo});
        console.log(todo);
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