import React, {useEffect} from 'react';
//import DatePicker from 'react-datetime';
//https://www.npmjs.com/package/react-datetime
import 'react-datetime/css/react-datetime.css';
//import moment from 'moment';

import NossoDate from './NossoDate';

function TodoForm({addTodo, singleTodo, updateTodo, clearSingleTodo}){
  
  const [task, setTask] = React.useState("");
  const [datepick, setDatepick] = React.useState();

  useEffect(() => {    
    if(Object.keys(singleTodo).length > 0){
      setTask(singleTodo.text);
      setDatepick(singleTodo.dueDate);
    }else
      setDatepick("");
  },[singleTodo])

  const handleSubmit = e => {
    e.preventDefault();
    if(!task) return;
    if(Object.keys(singleTodo).length > 0){
      updateTodo(
        {
          id: singleTodo.id, 
          text: task, 
          isCompleted: singleTodo.isCompleted,
          dueDate: new Date(datepick)
        }
      );
    }else{
      addTodo(task,datepick);
      
    }
    
    //setDatepick(null);
    clearSingleTodo();
    setTask("");
   
    
  }

  const handleChange = e => {
    e.preventDefault();
      setTask(e.target.value)
  }

  const handleCancel = e => {
    e.preventDefault();
    clearSingleTodo();
    setTask("");
     setDatepick("");
  }

  const handleChangeDate = date => {
    setDatepick(date);
  }

  return (
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          className = "input"
          value={task}
          onChange={handleChange}
          size={45}
        />
        {/* <DatePicker 
          value={datepick}
          onChange={val =>setDatepick(val)}
          dateFormat = "DD-MM-YYYY"
          timeFormat = "HH:mm:ss"
        /> */}
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
        style= {{display : Object.keys(singleTodo).length > 0 ? "block": "none" }}
        onClick={handleCancel}
        >
          Cancelar
        </button>
      </form>
  )
}

export default TodoForm;