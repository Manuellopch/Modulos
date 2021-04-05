//exportar de una clase que hereda de otra
import { NombreCliente, ahorros, mostrarInformacion, Cliente} from './cliente.js';
import { nombreEmpresas, ahorros as ahorroEmpresa, categoria,mostrarInformacion as mostrarInfEmpresa, Empresa} from './empresa.js';

//exportar la clase combinada
let empresa = new Empresa(nombreEmpresas, ahorroEmpresa, categoria);
console.log(empresa.mostrarInformacion());

//exportar la clase combinada
let cliente = new Cliente(NombreCliente, ahorros);
console.log(cliente.mostrarInformacion());

