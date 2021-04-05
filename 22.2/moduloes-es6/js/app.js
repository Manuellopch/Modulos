/*import { NombreCliente, ahorros, mostrarInformacion, Cliente} from './cliente.js';

//exportar variables
console.log(NombreCliente)
console.log(ahorros)

//exportar funcion
const info = mostrarInformacion(NombreCliente, ahorros);
console.log(info);

//exportar clases
const cliente = new Cliente(NombreCliente, ahorros);
console.log(cliente.mostrarInformacion());*/

//mostrar informacion clase
import * as Cliente from './cliente.js';
console.log(Cliente);

const info = Cliente.mostrarInformacion(Cliente.NombreCliente, Cliente.ahorros);
console.log(info);