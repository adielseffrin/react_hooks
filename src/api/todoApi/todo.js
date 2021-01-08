// import serverData from './serverData.json';
import getDateSeparated from '../../utils/date';
import { db } from '../../utils/firebase';
// Mostrar o que estava a explicar
// Vamos ter dois métodos para consultar a api ou banco de dados

export const getData = async () => {
// db já retorna uma promisse
  /* eslint-disable no-debugger */
  debugger;
  /* eslint-enable no-debugger */
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
  db.collection('tasks').add(todo);
};

// Agora a minha questão é qual destes dois é o default?
// podemos ter o default para retornar um objecto com os dois
// podemos fazer também isto
// agora temos duas maneiras de importar
// Pode manter se quiser fazer isto
// já lhe mostro
// import { getData, create} from  'ficheiro' ?
export default {
  getData,
  createNewTodo,
};

// Se usar fetch aqui teria um then para converter primeiro os dados para json
// then(res => {
// return res.json();
// existem mais o métodos dependendo do formato da resposta
// https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch
// arrayBuffer()
// blob()
// json()
// text(
// formData()
// depois criaria outro then para tratar a informação
// })
// .then(res => {
// console.log(dados);
// Aqui trata-se sempre a resposta para aquilo que pretendemos
// Nesta situação como o servidor nos retorna uma string na data e
// nós queremos o formato data basta fazer o seguinte
// pode ser também uma propriedade que mudou do lado do servidor
// e não queremos mudar o nosso código todo
// vou colocar a propriedade isCompleted como exemplo
// verificar que o resultado não é vazio e se for retornar um array
// vazio para não dar erro no map no component
// visto que também vamos querer separar o dia, mês e ano vou fazer
// isso já para não calcular sempre isso a cada rerender
// if (res) {
//     return res.map(item => {
//         // "..." chamam-se spreadOperators, é identico ao Object.assign
//         const dueDate = new Date(item.dueDate);
//         return {
//             ...item,
//             isCompleted: item.completed,
//             dueDate,
//             dueDateSeparated: getDateSeparated(dueDate)
//         }
//         //return Object.assign(item, {dueDate: new Date(item.dueDate)});
//     });
// }
// }
