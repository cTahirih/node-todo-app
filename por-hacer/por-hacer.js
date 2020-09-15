const fs = require('fs');
const colors = require('colors');

const cargarDB = () => {
  try {
    listadoPorHacer = require('../db/data.json');
  } catch (e) {
    listadoPorHacer = [];
  }
};

const getListado = () => {
  const lista  = require('../db/data.json');
  console.log(lista);
  return lista;
};

const actualizar = (descripcion, completado = true) => {
  cargarDB();

  let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
  console.log(index);
  if (index >= 0 ) {
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
};

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile(`db/data.json`, data, (onerror) => {
    if (onerror) throw new Error('No se pudo guardar la tarea', onerror);
  });
};

let listadoPorHacer = [];

const crear = (descripcion) => {

  cargarDB();

  let porHacer = {
    descripcion,
    completado: false
  };

  listadoPorHacer.push(porHacer);
  guardarDB();
  return porHacer;
};

const borrarTarea = (descripcion) => {
  cargarDB();

  let nuevoListado = listadoPorHacer.filter((item) => item.descripcion !== descripcion);

  if (listadoPorHacer.length === nuevoListado.length) {
    return false;
  } else {
    listadoPorHacer = nuevoListado;
    guardarDB();
  }
};

module.exports = {
  crear,
  getListado,
  actualizar,
  borrarTarea
};
