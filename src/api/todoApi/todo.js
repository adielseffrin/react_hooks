import getDateSeparated from '../../utils/date';
import { db } from '../../utils/firebase';

export const getData = async () => {
// db já retorna uma promisse
  const response = await db.collection('tasks').get();
  const dados = [];
  response.forEach((doc) => {
    const data = doc.data();
    const dueDate = new Date(data.dueDate);
    dados.push({
      ...data,
      id: doc.id,
      isCompleted: data.isCompleted,
      dueDate: dueDate.toISOString(),
      dueDateSeparated: getDateSeparated(dueDate),
    });
  });
  return dados;
};

export const createNewTodo = (todo) => {
  const ref = db.collection('tasks').doc(todo.id);
  ref.set(todo);
};

export const updateTodoBD = (todo) => {
  db.collection('tasks').doc(todo.id).update({
    text: todo.text,
    dueDate: todo.dueDate,
    isCompleted: todo.isCompleted,
  });
};

export default {
  getData,
  createNewTodo,
  updateTodoBD,
};
