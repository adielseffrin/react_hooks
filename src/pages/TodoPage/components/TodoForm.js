import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import 'react-datetime/css/react-datetime.css';
import './TodoForm.css';

import NossoDate from '../../../NossoDate';

function TodoForm({
  addTodo, singleTodo, updateTodo, clearSingleTodo,
}) {
  const [task, setTask] = React.useState('');
  const [datepick, setDatepick] = React.useState();

  useEffect(() => {
    if (Object.keys(singleTodo).length > 0) {
      setTask(singleTodo.text);
      setDatepick(singleTodo.dueDate);
    } else {
      setDatepick('');
    }
  }, [singleTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    if (Object.keys(singleTodo).length > 0) {
      updateTodo(
        {
          id: singleTodo.id,
          text: task,
          isCompleted: singleTodo.isCompleted,
          dueDate: new Date(datepick),
        },
      );
    } else {
      addTodo(task, datepick);
    }
    clearSingleTodo();
    setTask('');
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    clearSingleTodo();
    setTask('');
    setDatepick('');
  };

  const handleChangeDate = (date) => {
    setDatepick(date);
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={task}
          onChange={handleChange}
          size={45}
        />
        <NossoDate
          value={datepick}
          onChange={handleChangeDate}
        />
        <button
          type="submit"
        >
          Vai
        </button>
        <button
          type="button"
          style={{ display: Object.keys(singleTodo).length > 0 ? 'block' : 'none' }}
          onClick={handleCancel}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}

TodoForm.propTypes = {
  addTodo: PropTypes.func,
  clearSingleTodo: PropTypes.func,
  updateTodo: PropTypes.func,
  singleTodo: PropTypes.func,

};

TodoForm.defaultProps = {
  addTodo: PropTypes.func,
  clearSingleTodo: PropTypes.func,
  updateTodo: PropTypes.func,
  singleTodo: PropTypes.func,
};

export default TodoForm;
