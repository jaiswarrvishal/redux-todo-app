// src/components/Todo.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        // textDecoration: todo.completed ? 'line-through' : 'none'
      }}
    >
      {todo.text}
      {/* <button onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button> */}
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </li>
  );
};

export default Todo;
