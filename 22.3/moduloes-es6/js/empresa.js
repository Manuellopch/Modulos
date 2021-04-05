//export variables

export const nombreEmpresas = 'McDonald';
export let ahorroEmpresa = 200;
export const categoriaEmpresa = 'Restaurante';


//exportar funciones

export function mostrarInfEmpresa(nombre, ahorro, categoria){
     return `Cliente:${nombre} Cuenta:${ahorro} Categoria:${categoria}`;
};