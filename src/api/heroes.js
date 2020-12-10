export const getHeroes = () => {
  return fetch("https://hots-api.vercel.app/api/heroes")
  //return fetch("http://admin:'root!'@127.0.0.1:5984/tarefas")
  .then((res) => {
    if(res.ok){
      return res.json();
    }
  }
  )
  //.then({data} => {})
  .catch(console.log(this))
}

