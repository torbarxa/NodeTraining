const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: '10'
    }
}

const argv = require('yargs')
    .command('listar', 'Lista las tablas de multiplicar', opts)
    .command('crear', 'Crea archivo con las tablas de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}