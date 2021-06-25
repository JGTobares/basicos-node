const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    
    try {

        let salida, consola = '';

        for( let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${ 'x'.green } ${i} ${ '='.red } ${base*i}\n`;
        }

        if (listar) {
            console.log("=====================".green);
            console.log('   Tabla del '.grey, colors.blue( base) );
            console.log("=====================".green);
            console.log(consola);
        }

        fs.writeFile(`./salida/tabla-${base}.txt`, salida, (e) => {
            if (e) throw e;
        })
        return`tabla-${base}.txt`;

    } catch (e) {
        throw e;
    }
}

module.exports = {
    crearArchivo
}