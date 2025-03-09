import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Write tests", completed: false },
    { id: 3, text: "Build Todo App", completed: false },
  ]);

  const addTodo = (text) => {
    setTodos([
      ...todos,
      { id: Date.now(), text, completed: false },  // New todo with unique ID
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>  // Using map to iterate over todos
        todo.id === id ? { ...todo, completed: !todo.completed } : todo  // Toggle completion status
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));  // Filter out the deleted todo
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (  // Using map here to render each todo
          <li
            key={todo.id}  // Key prop is required for each list item
            onClick={() => toggleTodo(todo.id)}  // Toggle on click
            style={{
              textDecoration: todo.completed ? "line-through" : "none",  // Apply line-through if completed
            }}
          >
            {todo.text}
            <button onClick={(e) => {
              e.stopPropagation(); // Prevent triggering toggleTodo on click
              deleteTodo(todo.id);  // Delete the todo when clicked
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

function AddTodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);  // Add the new todo
      setInput("");  // Clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}  // Update input value
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoList;
