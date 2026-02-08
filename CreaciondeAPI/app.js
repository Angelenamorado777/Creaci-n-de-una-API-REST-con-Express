const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let books = require('./books.json');

//**
// 1 Creacion de GET
// */

app.get('/books', (req, res) => {
  res.json({ status: 200, message: 'Encontrados con exito', data: books });
});

//**
// Get por Id
// */

app.get('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let book = books.find(c => c.id === id);
  
  if (book) {
    res.json({ status: 200, message: 'ID encontrado', data: book});
  }
  else {
    res.json({ status: 404, message: 'ID no encontrado', data: book});
  }

});

// Creacion de Post/Agregar un Nuevo Libro


app.post('/books', (req, res) => {

const Nuevolibro = req.body;
books.push(Nuevolibro);

 res.status(201).json({status: 201,message: 'El libro se agrego exitosamente.', data: Nuevolibro});


});


//**
// #3 Definición PUT /api/books/:id: Actualizar un libro existente.
//  */
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const datosLibro = req.body;

  let isExists = false;

  books.forEach(b => {
    if (b.id === id) {
      isExists = true;
      b.titulo = datosLibro.titulo;
      b.autor = datosLibro.autor;
      b.genero = datosLibro.genero;
      b.anioPublicacion = datosLibro.anioPublicacion;
    }
  });

  if (isExists) {
    return res.status(200).json({
      status: 200,
      message: 'Libro actualizado',
      data: datosLibro
    });
  } else {
    return res.status(404).json({
      status: 404,
      message: 'Libro no encontrado'
    });
  }
});


app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
}); 

