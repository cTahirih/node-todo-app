const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Detalle de la tarea'
};

const completado = {
  default: true,
  alias: 'c',
  desc: 'Actualiza una tarea'
};

const argv = require('yargs')
  .command('crear', 'crea una nueva tarea', { descripcion })
  .command('actualizar', 'actualiza una tarea', {
    descripcion,
    completado
  })
  .command('borrar', 'elimina una tarea', {
    descripcion
  })
  .help()
  .argv;


module.exports = {
  argv
};
