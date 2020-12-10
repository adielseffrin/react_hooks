function Todo({todo, index, horaTarefa, completeTodo, removeTodo, loadTodo}){
  console.log(horaTarefa);
  return (
    <div 
      className="todo"
      style = {Object.assign({}, 
      {backgroundColor: todo.isCompleted || todo.dueDate - horaTarefa > 24*60*60*1000 ? "#fff" : todo.dueDate - horaTarefa < 0  ? "#e88" : "rgb(235, 231, 176)"} ,
        {textDecoration: todo.isCompleted ? "line-through" : "none"}
      )
    }
      onDoubleClick={() => loadTodo(todo.id)}  
    >
      {todo.text}
      <br/> (
        {todo.dueDate.getUTCDate().toString().padStart(2,'0')}/
        {(todo.dueDate.getUTCMonth()+1).toString().padStart(2,'0')}/
        {todo.dueDate.getUTCFullYear()}
        )
  
      <div>
        <button onClick={() => completeTodo(index)}>{!todo.isCompleted ? "Complete" : "Undo"}</button>
        <button onClick={() => removeTodo(todo.id)}>X</button>
      </div>
    </div>
  );
};
//ver react.fragment
//perguntar par ao bruno na proxima live, pq o splice é duro
//mas pesquisar antes

export default Todo;