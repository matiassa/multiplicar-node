// requireds
const fs = require('fs');
var colors = require('colors');


let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) ||
            typeof base === 'boolean' ||
            !Number(limite) ||
            typeof limite === 'boolean') {
            reject('No es un número'.rainbow);
            return;
        }

        let data = '';


        for (let i = 1; i <= limite; i++) {

            data += `${ base } * ${ i } = ${ base * i }\n`;
        }


        // fs.readFile(`tablas/tabla-${ base }.txt`, (err, data) => {
        //     if (err)
        //         reject(err)
        //     else
        //         resolve(data);
        // });

        resolve(data.rainbow);



    });
}


let crearArchivo = (base, limite) => {

        return new Promise((resolve, reject) => {


            if (!Number(base) ||
                typeof base === 'boolean' ||
                !Number(limite) ||
                typeof limite === 'boolean') {
                reject('No es un número');
                return;
            }


            let data = '';


            for (let i = 1; i <= limite; i++) {

                data += `${ base } * ${ i } = ${ base * i }\n`;
            }

            fs.writeFile(`tablas/tabla-${ base }-al-${limite}.txt`, data, (err) => {
                if (err)
                    reject(err)
                else
                    resolve(`tablas/tabla-${ base }-al-${limite}.txt`.green);
            });

        });

    }
    // agregar las funciones a medida que vamos agregando para poder exportar a otro fichero y asi utilizarlo.
module.exports = {
    crearArchivo,
    listarTabla
}