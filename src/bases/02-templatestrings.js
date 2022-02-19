// Template strings

const nombre = 'Hector';
const apellido = 'Jimenez';

const nomCompleto = `
                    Hola mi nombre es ${nombre}
                    Mi apellido es ${apellido}`

console.log(nomCompleto);

function getSaludo() {
  return 'Hola mundo'
}

console.log( ` Este es un saludo: ${getSaludo()} ` );