//queries
const {
  getTodos,
  postTodo,
  getTodo,
  deleteTodo
} = require('./queries.js');

//express
const express = require('express');
const app = express();
//Iniciar Servidor
app.listen(4000, () => {
  console.log('El servidor está inicializado en el puerto 4000');
})

//nodemodules
app.use('/node_modules', express.static(__dirname + '/node_modules'))

//acceso a carpeta raiz
app.use('/public', express.static(__dirname + '/public'))

// bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))

//Configuracion handlebars
const {
  create
} = require('express-handlebars');
app.set('view engine', 'handlebars')
const handlebars = create({
  layoutsDir: __dirname + '/views',
  partialsDir: __dirname + '/views/components'
})
app.engine('handlebars', handlebars.engine)

//moment handlebars
const Handlebars = require("handlebars");
const MomentHandler = require("handlebars.moment");
MomentHandler.registerHelpers(Handlebars);

//Ruta /
app.get('/', (req, res) => {
  getTodos().then((value) => {
    res.render('main', {
      todos: value
    })
  }, (reason) => {
    console.log(reason);
  })
})

//Ruta /todos
app.get('/todos', (req, res) => {
  getTodos().then((value) => {
    res.json(value)
  }, (reason) => {
    console.log(reason);
  })
})

// Ruta todo-create GET
app.get('/todo-create', (req, res) => {
  res.render('create', {
    layout: 'create'
  })
})

//urlencoded
app.use(express.urlencoded({
  extended: true
}))

// Ruta todo-create POST
app.post('/todos', (req, res) => {
  postTodo(Object.values(req.body))
    .then((value) => {
      res.redirect('/')
    }, (reason) => {
      console.log(reason);
    })
})

//Ruta todo-delete/:id GET
app.get('/todo-delete/:id', (req, res) => {
  const id = req.params.id
  getTodo(id)
    .then((value) => {
      res.render('delete', {
        layout: 'delete',
        todo: value
      })
    }, (reason) => {
      console.log(reason);
    })
})

//Ruta todo-delete/:id DELETE
app.delete('/todos/:id', async (req, res) => {
  const id = req.params.id
  await deleteTodo(id)
  res.send('listo')
})