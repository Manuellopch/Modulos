//export variables

export const nombreEmpresas = 'McDonald';
export let ahorros = 200;
export const categoria = 'Restaurante';


//exportar funciones

export function mostrarInformacion(nombre, ahorro, categoria){
     return `Cliente:${nombre} Cuenta:${ahorro} Categoria:${categoria}`;
};