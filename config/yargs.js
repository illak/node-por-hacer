const descripcion =  {
    describe: 'Descripción de la tarea por hacer',
    alias: 'd',
    demandOption: true
};

const completado =  {
    describe: 'Marca como completado o pendiente la tarea',
    alias: 'c',
    default: true
}


const argv = require('yargs')
    .command('crear','Crear un elemento por hacer',{
        descripcion
    })
    .command('actualizar','Actualizar un elemento por hacer',{
        descripcion,
        completado
    })
    .command('borrar','Borrar una tarea',{
        descripcion
    })
    .command('listar','Listar todas las tareas')
    .help()
    .argv;


module.exports = {
    argv
}