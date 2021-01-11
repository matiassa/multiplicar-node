const opts = {
    base: {
        //obligatorio
        demand: true,
        alias: 'b',

    },
    limite: {
        alias: 'l',
        default: 10
    }

}


const argv = require('yargs')
    .command('listar', 'Permite listar las tablas de multiplicar', opts)
    .command('crear', 'Permite crear las tablas de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}