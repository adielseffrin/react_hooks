import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Sort, SORT_TYPE } from '../../../components';
import './TodoList.css';

// Mude este Nomes :D
// Isto é um enum em js, eu tenho como prática usar Uppercase
//  para perceber que é um enum
export const STATE_TODO = {
  AFTER_DATE: 'acabou',
  ALMOST_END: 'quase',
  GOOD: 'longe de acabar',
};

const TodoList = ({
  todos,
  loadTodo,
  completeTodo,
  removeTodo,
}) => {
  const [sortType, setSortType] = useState(SORT_TYPE.NO_SORT);
  const getBackgrounColor = (todo) => {
    switch (todo.state) {
      case STATE_TODO.AFTER_DATE:
        return '#e88';
      case STATE_TODO.ALMOST_END:
        return 'rgb(235, 231, 176)';
      default:
        return '#fff';
    }
  };

  TodoList.defaultProps = {
    todos: PropTypes.object,
    loadTodo: PropTypes.func,
    completeTodo: PropTypes.func,
    removeTodo: PropTypes.func,
  };

  TodoList.propTypes = {
    todos: PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.string,
      isCompleted: PropTypes.bool,
      dueDate: PropTypes.string,
      dueDateSeparated: PropTypes.string,
      sort: PropTypes.func,
    }),
    loadTodo: PropTypes.func,
    completeTodo: PropTypes.func,
    removeTodo: PropTypes.func,
  };

  const sortTodos = () => {
    switch (sortType) {
      case SORT_TYPE.ASC:
        return todos.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
      case SORT_TYPE.DESC:
        return todos.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
      default:
        return todos;
    }
  };

  const onSort = (type) => {
    setSortType(type);
  };

  return (
    <>
      <Sort onSort={onSort} />
      <div className="todo-list">
        {sortTodos().map((todo) => (
          <div
            key={`todo-item-${todo.id}`}
            className="todo-item"
            style={
              {
                backgroundColor: getBackgrounColor(todo),
                textDecoration: todo.isCompleted ? 'line-through' : 'none',
              }
            }
            onDoubleClick={() => loadTodo(todo.id)}
          >
            {todo.text}
            <br />
            (
            {todo.dueDateSeparated.day.toString().padStart(2, '0')}
            /
            {todo.dueDateSeparated.month.toString().padStart(2, '0')}
            /
            {todo.dueDateSeparated.year}
            )
            <div>
              <button type="button" onClick={() => completeTodo(todo.id)}>{!todo.isCompleted ? 'Complete' : 'Undo'}</button>
              <button type="button" onClick={() => removeTodo(todo.id)}>X</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
