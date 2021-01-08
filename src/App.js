import React, { useState } from 'react';
import TodoPage from './pages/TodoPage/TodoPage';

const PAGES = { TODO: 'todo', OTHER: 'Outro' };

// aqui deverá ficar apenas a gestão de rotas,
// por exemplo utilizar o react-router-dom ou fazer a nossa própria gestão sem url
const App = () => {
  // Gestão sem url
  const [page, setPage] = useState(PAGES.TODO);

  return (
    <>
      <nav>
        <button type="button" onClick={() => setPage(PAGES.TODO)}>Go TODO</button>
        <button type="button" onClick={() => setPage(PAGES.OTHER)}>Go Others</button>
      </nav>
      {page === PAGES.TODO && <TodoPage />}
      {page === PAGES.OTHER && <div>Outro componente</div>}
    </>
  );
};

export default App;
