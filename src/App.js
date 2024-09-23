import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Function to add a todo
  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  };

  // Function to handle key press (Enter)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h1 className="app-title">To-Do List</h1>
        <div className="todo-input-container">
          <input
            type="text"
            className="todo-input"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={handleKeyPress} // Add this to handle Enter key press
            placeholder="Add a new task..."
          />
          <button className="add-button" onClick={addTodo}>
            Add
          </button>
        </div>

        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li className="todo-item" key={index}>
              <span className="todo-text">{todo}</span>
              <button className="delete-button" onClick={() => deleteTodo(index)}>
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
