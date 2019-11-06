import React from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Todo List</h1>
        <TodoForm />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
