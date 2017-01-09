var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Datasource
var books = [
  {id: 1, title: 'Le Père Goriot', author: 'Balzac', year: 1842, available: true },
  {id: 2, title: 'Germinal', author: 'Zola', year: 1880, available: true },
  {id: 3, title: 'L\'éducation sentimentale', author: 'Flaubert', year: 1860, available: false },
  {id: 4, title: 'Bouvard et Pécuchet', author: 'Flaubert', year: 1870, available: true },
  {id: 5, title: 'Le Horla', author: 'Maupassant', year: 1885, available: true },
  {id: 6, title: 'Nord', author: 'Céline', year: 1950, available: true },
];

// Middlewares
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, DELETE");
  next();
});

// Api
app.get('/books', function(req, res) {
  res.json(books);
});

app.post('/books', function(req, res) {
  var id = getLastId(books);

  var book = {
    id: id + 1, // incrémentation de l'id
    title: req.body.title,
    author: req.body.author,
    year: parseInt(req.body.year),
    available: req.body.available
  };
  // ajout du book au tableau des books
  books.push(book);
  res.json(book);
});

app.put('/books/:id', function(req, res) {
  var id = parseInt(req.params.id);
  var newBook = {
    id: id,
    title: req.body.title,
    author: req.body.author,
    year: parseInt(req.body.year),
    available: req.body.available
  };
  for(var i=0; i<books.length; i++) {
    if (id === books[i].id) {
      books[i] = newBook;
      break;
    }
  }
  res.json(newBook);
});

app.delete('/books/:id', function(req, res) {
  var id = parseInt(req.params.id);
  for(var i=0; i<books.length; i++) {
    if (id === books[i].id) {
      books.splice(i, 1);
      break;
    }
  }
  res.json({id:id});
});

app.listen(5000, function() {
  console.log('Serveur écoute le port 5000...');
});

// Helpers
function getLastId(array) {
  var maxId = 0;
  for(var i=0; i<array.length; i++)
    if (array[i].id > maxId) maxId = array[i].id;
  return maxId;
}
