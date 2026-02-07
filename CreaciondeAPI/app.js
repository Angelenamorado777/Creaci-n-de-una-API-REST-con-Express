const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let books = [
  {
    id: 1,
    titulo: 'El señor de los anillos: La comunidad del anillo',
    autor: 'J. R. R. Tolkien',
    genero: 'Fantasía',
    anioPublicacion: '1954'
  },
  {
    id: 2,
    titulo: 'El señor de los anillos: Las dos torres',
    autor: 'J. R. R. Tolkien',
    genero: 'Fantasía',
    anioPublicacion: '1954'
  },
  {
    id: 3,
    titulo: 'El señor de los anillos: El retorno del rey',
    autor: 'J. R. R. Tolkien',
    genero: 'Fantasía',
    anioPublicacion: '1955'
  },
  {
    id: 4,
    titulo: 'El hobbit',
    autor: 'J. R. R. Tolkien',
    genero: 'Fantasía',
    anioPublicacion: '1937'
  },
  {
    id: 5,
    titulo: 'Las crónicas de Narnia: El león, la bruja y el ropero',
    autor: 'C. S. Lewis',
    genero: 'Fantasía',
    anioPublicacion: '1950'
  }
];


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