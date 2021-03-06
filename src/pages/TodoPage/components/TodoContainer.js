import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import { getData, createNewTodo, updateTodoBD } from '../../../api/todoApi/todo';
import TodoList, { STATE_TODO } from './TodoList';
import getDateSeparated from '../../../utils/date';
import Utils from '../../../utils/utils';

const TodoContainer = () => {
  const [singleTodo, setSingleTodo] = useState({});
  const [horaAtual, setHoraAtual] = useState(new Date());

  const [todos, setTodos] = useState([]);

  useEffect(
    () => getData().then((res) => {
      // console.log(res);
      setTodos(res);
    }),
    [],
  );

  useEffect(() => {
    const relogio = setTimeout(() => {
      setHoraAtual(new Date());
    }, 60 * 1000);
    return () => clearTimeout(relogio);
  });

  const removeTodo = (index) => {
    const newTodos = [...todos];
    setTodos(newTodos.filter((t) => t.id !== index));
  };

  const completeTodo = (_id) => {
    const newTodos = [...todos].map((todo) => {
      if (todo.id === _id) {
        todo.isCompleted = !todo.isCompleted;
      }
      updateTodoBD(todo);
      return todo;
    });

    setTodos(newTodos);
  };

  const addTodo = (_text, _due) => {
    const dueDate = new Date(_due);
    const newTodo = {
      text: _text,
      id: Utils.uuidv4(),
      isCompleted: false,
      dueDate: dueDate.toISOString(),
    };

    createNewTodo(newTodo);

    newTodo.dueDateSeparated = getDateSeparated(dueDate);

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const loadTodo = (_id) => {
    const t1 = [...todos].find((t) => t.id === _id);
    setSingleTodo(t1);
  };
  /* eslint no-param-reassign: ["error", { "props": false }] */
  const updateTodo = (obj) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === obj.id) {
        todo.text = obj.text;
        todo.dueDate = obj.dueDate;
        todo.dueDateSeparated = getDateSeparated(obj.dueDate);
      }
      updateTodoBD(todo);
      return todo;
    });
    setTodos(newTodo);
  };

  const clearSingleTodo = () => {
    setSingleTodo({});
  };

  const getTodoState = (todo) => {
    /* eslint-disable max-len */
    const dia2ms = 24 * 60 * 60 * 1000;
    const cond2 = new Date(todo.dueDate) - horaAtual < 0 ? STATE_TODO.AFTER_DATE : STATE_TODO.ALMOST_END;
    const cond1 = todo.isCompleted || new Date(todo.dueDate) - horaAtual > dia2ms ? STATE_TODO.GOOD : cond2;
    /* eslint-enable max-len */
    return cond1;
  };

  return (
    <div>
      <TodoForm
        addTodo={addTodo}
        singleTodo={singleTodo}
        updateTodo={updateTodo}
        clearSingleTodo={clearSingleTodo}
      />
      <TodoList
        todos={todos.map((todo) => ({ ...todo, state: getTodoState(todo) }))}
        loadTodo={loadTodo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </div>
  );
};

export default TodoContainer;
