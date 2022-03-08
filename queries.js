//require
require('dotenv').config('/')
const {
  values
} = require('lodash')
const {
  Client
} = require('pg')

//getTodos
const getTodos = async () => {
  const client = new Client()
  await client.connect()
  const res = await client.query('SELECT * FROM todos')
  await client.end()
  return res.rows
}

//generarquery
const generarQuery = (name, text, values) => {
  return {
    name,
    text,
    values
  }
}

//postTodo
const postTodo = async (datos) => {
  datos.push(new Date().toISOString())
  const client = new Client()
  await client.connect()
  const name = "insertar"
  const text = "INSERT INTO todos (nombre, descripcion, fecha_creacion) values($1, $2, $3)"
  const values = datos
  const res = await client.query(generarQuery(name, text, values))
  await client.end()
  return res.rows
}

//getTodos
const getTodo = async (id) => {
  const client = new Client()
  await client.connect()
  const name = "ConsultarId"
  const text = "SELECT * FROM todos WHERE id=$1"
  const values = [id]
  const res = await client.query(generarQuery(name, text, values))
  await client.end()
  return res.rows[0]
}

//deleteTodo
const deleteTodo = async (id) => {
  const client = new Client()
  await client.connect()
  const name = "deleteId"
  const text = "DELETE FROM todos WHERE id=$1"
  const values = [id]
  const res = await client.query(generarQuery(name, text, values))
  await client.end()
  return res.rows[0]
}

module.exports = {
  getTodos,
  postTodo,
  getTodo,
  deleteTodo
}