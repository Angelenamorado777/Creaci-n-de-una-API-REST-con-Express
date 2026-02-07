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





app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
}); 