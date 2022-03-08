(async () => {
  await axios.get('http://localhost:4000/todos')
  return
})()

const deleteTodo = async (id) => {
  await axios.delete(`http://localhost:4000/todos/${id}`)
    .then((value) => {
      window.location.href = 'http://localhost:4000/';
    }, (reason) => {
      console.log(reason);
    })
}

const crearTodo = async () => {
  window.location.href = 'http://localhost:4000/todo-create';
}