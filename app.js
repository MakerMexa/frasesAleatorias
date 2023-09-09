//import { mostrarFrase, cambiaColor } from "./funciones";

import xd from './funciones.js';

const {mostrarFrase, cambiaColor} = xd;

const button = document.querySelector('.btn');
const contenedor = document.querySelector('#contenedor');

button.addEventListener('click', () => {
    mostrarFrase(contenedor);
    cambiaColor(button);
});