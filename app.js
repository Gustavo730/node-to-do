
const colors = require('colors');
const argv = require('./config/yargs').argv;
const porHacer = require('./to-do/por-hacer');

// console.log(argv);

let comando = argv._[0];

switch ( comando ) {

  case 'crear':
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    break;

  case 'listar':
    console.log('* * * NOTAS * * *'.green);
    let listado = porHacer.listar();
    for (let tarea of listado) {
      console.log(` Descripción: ${tarea.descripcion.yellow}`);
      if (tarea.completado) {
          console.log(' Estado: '+ 'Completado'.green);
      }else{
        console.log(' Estado: '+'Pendiente'.red);
      }
      console.log('- - - - - - - - - - - - - - - - -'.green);
    }
    break;

  case 'actualizar':
    let actualiza = porHacer.actualizar(argv.descripcion, argv.completado);
    if (actualiza) {
      console.log('Nota actualizada'.green);
    }else{
      console.log('Error al actualizar'.red);
    }
    break;

  case 'borrar':
    let borrar = porHacer.borrar( argv.descripcion );
    if (borrar) {
      console.log('Nota borrada'.green);
    } else {
      console.log('Error al borrar'.red);
    }
    break;
  default:
    console.log('Comando no reconocido'.red);

}
