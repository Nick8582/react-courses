import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isComplited: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHeadler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHeadler = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, isComplited: !todo.isComplited } : { ...todo }
    ))
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isComplited))
  }

  const complitedTodoCount = todos.filter((todo) => todo.isComplited).length

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm
        addTodo={addTodoHandler}
        placeholder="Enter new todo"
      />
      {!!todos.length && (
        <TodosActions
          complitedTodosExist={!!complitedTodoCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}
      <TodoList
        deleteTodo={deleteTodoHeadler}
        todos={todos}
        toggleTodo={toggleTodoHeadler}
      />
      {complitedTodoCount > 0 && (
        <h2>{`You have complited ${complitedTodoCount} ${complitedTodoCount > 1 ? 'todos' : 'todo'}`}</h2>
      )}
    </div>
  );
}

export default App;
