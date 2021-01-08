import React from 'react';
import { Relogio, TasksContainer } from '../../components';
import TodoContainer from './components/TodoContainer';

// Aqui deverá ficar o estado comum a toda a página
// isto é bom para a reutilização de componentes, pois os componentes
// devem ser o mais burros possíveis
// também assim só fica o estado que muda menos e assim cada só
// renderiza toda a página se for realmente necessário
const TodoPage = () => (
  <div>
    <TasksContainer />
    <Relogio />
    <TodoContainer />
  </div>
);

// VLamartine falou para passar o text no _value

export default TodoPage;
