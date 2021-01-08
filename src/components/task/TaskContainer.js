import React from 'react';
import { v4 as uuid } from 'uuid';
import List from '../list/List';

const TasksContainer = () => {
  const setPriorityHTML = (taskDescription, priority) => {
    switch (priority) {
      case 1:
        return <b>{taskDescription}</b>;
      default:
        return taskDescription;
    }
  };

  const createTasks = (taskDescription, priority = 5, complete = false) => ({
    text: setPriorityHTML(taskDescription, priority),
    id: uuid.v4,
    priority,
    complete,
  });
  // Não utilizei o useState porque não pretende receber estes valores da
  // webApi e não vou atualizar o componente
  // Contudo poderia estar dentro de um useState
  const tasks = [
    createTasks('Integrar com um bd (mongo ou ->firebase ou couchDB ou sqlite) - CRud', 1),
    createTasks('(ideias) Salvar no navegador'),
    createTasks('Estudar css'),
    createTasks('tipo: CSS - ["aprender flex box", "aprender grid"], JS - ["aprender async/await"] e por ai vai'),
    createTasks('https://br.pinterest.com/brobo/ui-to-do-list/'),
    createTasks('Estudar promisses antes da proxima live (ou durante)'),
    createTasks('Colocar usuario nos dados'),
    createTasks('(ideias)fazer filtros (user e categoria)'),
    createTasks('Conectar com axios e também com fetch pra passar trablho(se der errado, colocar a culpa no chicão)'),
    createTasks('Num futuro: planejar algo para receber a request'),
    createTasks('Num futuro: implementar testes jest ou cypress'),
  ];

  return (
    <>
      <h2>Lista de tarefas </h2>
      {/* só passo o texto porque a lista é genérica e apenas recebe os valores p/ apresentar */}
      <List listValues={tasks.map((item) => item.text)} />
    </>
  );
};

export default TasksContainer;
