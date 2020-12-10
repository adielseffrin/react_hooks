import {useState, useEffect} from 'react';
import './App.css';
import Todo from './Todo';
import TodoForm from "./TodoForm";
import Horario from "./Horario";
import {getData} from "./data/dados"
import Heroes from "./Heroes";
import {getHeroes} from "./api/heroes";
import Sort, {SortType} from "./Sort";


function App() {
  const [singleTodo, setSingleTodo] = useState({});
  const [horaAtual, setHoraAtual] = useState(new Date());
  const [horaTarefa, setHoraTarefa] = useState(new Date());
  const [herois, setHerois] = useState();
  const [todos, setTodos] = useState(getData());
 
  
  // useEffect(() => 
  //   getHeroes().then(res => {
  //     setHerois(res.heroes);
  //     //console.log(res.heroes);
  //   })
  // ,[]);

  useEffect(() => {    
    const relogio = setTimeout(() => {setHoraAtual(new Date())},1000);
    return () => clearTimeout(relogio);
  })

  useEffect(() => {    
    const relogioMinuto = setTimeout(() => {setHoraTarefa(new Date())},1000*60);
    return () => clearTimeout(relogioMinuto);
  })


  const removeTodo = index => {
    const newTodos = [...todos];
    setTodos(newTodos.filter(t => t.id !== index));
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const addTodo = (text,due) => {
    
    const newTodos = [...todos, 
      {
        'text':text,
        'id' :  Math.random().toString(36).substring(7), 
        isCompleted: false, 
        dueDate: new Date(due)
      }
    ];
    setTodos(newTodos);
  }

  const loadTodo = _id =>{
    const t1 = [...todos].find(t => t.id === _id);
    setSingleTodo(t1);
  }

  const updateTodo = (obj) => {
    const newTodo = todos.map((todo)=>{
      if(todo.id === obj.id){
        todo.text = obj.text;
        todo.dueDate = obj.dueDate;
      // break;
      }
      return todo;
  })
  setTodos(newTodo);
  }

  const clearSingleTodo = () =>{
    setSingleTodo({});
  }

  const onSort = (type) => {
    if(type === SortType.ASC){
      todos.sort((a,b) => {
        return a.dueDate - b.dueDate;
      })
      
    }else{
      todos.sort((a,b) => {
        return b.dueDate - a.dueDate;
      })
    }
    setTodos([...todos]);
  };

  console.log(todos);
  
  return (
    <div className="app">
      <p>
        <b>Integrar com um bd (mongo ou firebase ou couchDB)</b><br/>
        (ideias) Salvar no navegador<br/>
        (ideias) colocar categorias nas todos<br/>
        tipo: CSS - ['aprender flex box', 'aprender grid'], JS - ['aprender async/await'] e por ai vai<br/>
        https://br.pinterest.com/brobo/ui-to-do-list/<br/>
        (ideias)fazer filtros (user e categoria)<br/>
        (ideias) carregar img do user (e talvez categoria)<br/>
        //Estudar promisses antes da proxima live (ou durante)<br/>
        //Estudar css<br/>
        Colocar ususario nos dados<br/>
        Conectar com axios e também com fetch pra passar trablho(se der errado, colocar a culpa no chicão)
        Num futuro: planejar algo para receber a request
      </p>
      <p>Lista de tarefas </p>
      <Horario  
        horaAtual={horaAtual}
      />
      <div className="todo-form">
        <TodoForm 
            addTodo={addTodo}  
            singleTodo={singleTodo} 
            updateTodo={updateTodo}
            clearSingleTodo = {clearSingleTodo}
          />
      </div>
      <Sort onSort={onSort}/>
      <div className="todo-list">
        {todos
        .map((todo, index)=> (
          <Todo
            key={index}
            index={index}
            todo={todo}
            horaTarefa = {horaTarefa}
            completeTodo={completeTodo}
            removeTodo = {removeTodo}
            loadTodo = {loadTodo}
          />
        ))}
        {/* <Heroes
          name={herois && herois.length>1 ? herois[2].name: ''}
        /> */}
      </div>
    </div>
  );
}
//VLamartine falou para passar o text no _value

export default App;
