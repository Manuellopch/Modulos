import {Cliente} from './cliente.js'

//export variables
export const nombreEmpresas = 'McDonald';
export let ahorros = 200;
export const categoria = 'Restaurante';

//exportar funciones
export function mostrarInformacion(nombre, ahorro, categoria){
     return `Cliente:${nombre} Cuenta:${ahorro} Categoria:${categoria}`;
};

//exportar de una clase que hereda a otra
//utilizar la clase del modulo cliente
export class Empresa extends Cliente {
     constructor(nombre, ahorro, categoria){
     super(nombre, ahorro);
     this.categoria = categoria;
     }
     mostrarInformacion(nombre, ahorro, categoria){
     return `Empresa:${this.nombre} Cuenta:${this.ahorro} Categoria:${this.categoria}`;
     }
}