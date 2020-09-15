const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
let comando = argv._[0];

console.log(argv);
switch ( comando ) {
  case 'crear':
    porHacer.crear(argv.descripcion);
  break;

  case 'listar':
    let listado = porHacer.getListado();

    for (let tarea of listado) {
      console.log('********* P o r  H a c e r **********'.rainbow);
      console.log(`- ${tarea.descripcion}`);
      tarea.completado ?
        console.log('Completado'.green) :
        console.log('No completado'.red);
      console.log('*************************************'.rainbow);
    }
  break;

  case 'actualizar':
    let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);

    actualizado ?
      console.log(`Tarea: ${argv.descripcion} - ACTUALIZADA`.blue) :
      console.log(actualizado);
    break;

  case 'borrar':
    let borrado = porHacer.borrarTarea(argv.descripcion);
    console.log(borrado);
    break;

  default:
    console.log();
}
