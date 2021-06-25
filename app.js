const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');


console.clear();

/*
const [ , , arg3 = 'base=5'] = process.argv; 
const [ , base = 6] = arg3.split('=');
*/
// Para no realizar la logica de arriba que posee vulnerabilidades o errores, se emplea YARGS

crearArchivo(argv.b, argv.l, argv.h) 
.then( nombreArchivo => console.log(nombreArchivo.rainbow, ' creado!'))
.catch( e => console.log(e)); 
