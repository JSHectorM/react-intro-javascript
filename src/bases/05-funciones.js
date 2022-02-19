// funcion normal
const saludar = function ( nombre ) {
  return `Hola ${nombre}`
}
// funcion de flecha
const saludar2 = ( nombre ) => { 
  return `Hola ${nombre}`
}
// funcion de flecha simplificada
const saludar3 = ( nombre ) => (`Hola, ${nombre}`);

console.log( saludar2( 'HectorJS' ) );
console.log( saludar3( 'HectorJS' ) );