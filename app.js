const multiplicar = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;


//restructuring
let { crearArchivo, listarTabla } = multiplicar;


//console.log(process); //datos relacionados con el OS. entre otras cosas
//para configuraciones globales


//Me da el pad donde esta la ruta del fichero y de node.
//console.log(process.argv);

// let argv2 = process.argv;

// console.log(argv2);
//console.log(argv._[0]);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then((archivo) => {
                console.log(`Archivo listado\n${archivo}`);
            })
            .catch((err) => {
                console.log(err);
            })
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => {
                console.log(`Archivo creado ${archivo}`);
            })
            .catch((err) => {
                console.log(err);
            })
        break;

    default:
        console.log(`'${ comando }', comando no reconocido`);
        break;
}