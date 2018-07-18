
const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripción de la nota por hacer'
}

const completado = {
  demand: true,
  default: true,
  alias: 'c',
  desc: 'Marca como completado o pendiente la nota'
}


const argv = require('yargs')
  .command('crear','Crea una nota por hacer',{descripcion})
  .command('listar','Lista las notas')
  .command('actualizar','Actualiza el estado de las notas por hacer',{descripcion, completado})
  .command('borrar', 'Borra una tarea',{descripcion})
  .help()
  .argv;

module.exports = {
  argv
}
