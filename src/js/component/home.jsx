import React, { useState } from 'react';
import Todo from './todo';

const Home = () => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState('');
  
	const addTodo = (e) => {
	  if (e.key === 'Enter' && newTodo.trim() !== '') {
		setTodos([...todos, { text: newTodo, active: true }]);
		setNewTodo('');
	  }
	};
  
	const removeTodo = (index) => {
	  const updatedTodos = [...todos];
	  updatedTodos.splice(index, 1);
	  setTodos(updatedTodos);
	};
  
	const countActiveTodos = () => {
	  return todos.filter((todo) => todo.active).length;
	};
  
	return (
	  <div className="container text-center mt-5">
		<h1 className="mb-4">Todos</h1>
		<div className="card p-3 mx-auto" style={{ maxWidth: '400px' }}>
		  <input
			type="text"
			value={newTodo}
			onChange={(e) => setNewTodo(e.target.value)}
			onKeyPress={addTodo}
			className="form-control mb-3"
			placeholder=""
		  />
		  {todos.length === 0 ? (
			<p>No hay tareas, añadir tareas</p>
		  ) : (
			<div>
			  {todos.map((todo, index) => (
				<Todo
				  key={index}
				  index={index}
				  todo={todo}
				  removeTodo={removeTodo}
				/>
			  ))}
			  <p className="text-left mt-3">
				{countActiveTodos()} {countActiveTodos() !== 1 ? 'tareas' : 'tarea'} por hacer
			  </p>
			</div>
		  )}
		</div>
	  </div>
	);
  };
  
  export default Home;