const argv = require('./config/config.js').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log('listar'.green);
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
        break;
    default:
        console.log('comando no reconocido');
}