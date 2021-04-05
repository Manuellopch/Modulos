//exportar variables
export const NombreCliente = 'Manuel';
export const ahorros = 2000;

//exportar funciones

export function mostrarInformacion(nombre, ahorro){
     return `Cliente:${nombre} Cuneta:${ahorro}`;
}

//exportar funciones y objetos
export class Cliente {
     constructor(nombre, ahorro){
          this.nombre = nombre;
          this.ahorro = ahorro;
     }
     mostrarInformacion(){
          return `Cliente:${this.nombre} Cuneta:${this.ahorro}`;
     }
}

