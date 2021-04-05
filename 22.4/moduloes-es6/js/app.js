//exportar multiples archivos
import { NombreCliente, ahorros, mostrarInformacion, Cliente} from './cliente.js';
import { nombreEmpresas, ahorros as ahorroEmpresa, categoria,mostrarInformacion as mostrarInfEmpresa} from './empresa.js';

console.log(NombreCliente);
console.log(nombreEmpresas);
console.log(ahorros);
console.log(ahorroEmpresa);
console.log(categoria);


//exportar funcion
const info =  mostrarInformacion(NombreCliente, ahorros);
console.log(info);

//exportar funcion
const infoEmpresa =  mostrarInfEmpresa(nombreEmpresas, ahorroEmpresa, categoria);
console.log(infoEmpresa);
