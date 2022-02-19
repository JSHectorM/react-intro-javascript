console.log('Hola mundo!!!');

// objetos literales

const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad : 45,

  direcciones: {
    ciudad: 'New york',
    cp: 2345,

  }

}

console.table( persona );


// const persona2 = persona; //! asignacion de referancia
const persona2 = { ...persona };


persona2.nombre = 'Peter';

console.table( persona2 );
// console.table( persona );