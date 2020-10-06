import React, { useState, useReducer } from 'react';
import { initialTodoState, todoReducer } from './reducers/index';

import './App.css';

function App() {
  const [todoState, dispatch] = useReducer(todoReducer, initialTodoState);
  const [newTodo, setNewTodo] = useState('');
  console.log(todoState);

  const changeHandler = (e) => {
    setNewTodo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="App">
        <h2>Todo List</h2>
        <input
          type="text"
          name="newTodo"
          onChange={changeHandler}
          value={newTodo}
        ></input>
        <button
          onClick={() => {
            dispatch({ type: 'ADD_TODO', payload: newTodo });
          }}
        >
          Add Task
        </button>
      </div>
    </form>
  );
}

export default App;
