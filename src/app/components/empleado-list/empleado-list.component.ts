import { Component } from '@angular/core';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrl: './empleado-list.component.css'
})
export class EmpleadoListComponent {

listEmpelados: Empleado[] = [
  { legajo:1, nombre:'Alejandro', apellido:'Raya', sexo:'Masculino', salario:58000 },
  { legajo:2, nombre:'Jose', apellido:'Garcia', sexo:'Masculino', salario:50000 },
  { legajo:3, nombre:'Javier', apellido:'Pulido', sexo:'Masculino', salario:29000 },
  { legajo:4, nombre:'Jesus', apellido:'Flores', sexo:'Masculino', salario:36000 },
  { legajo:5, nombre:'Antonio', apellido:'Gonzales', sexo:'Masculino', salario:32000},
  { legajo:6, nombre:'Valeria', apellido:'Ortiz', sexo:'Femenino', salario:26000 },
  { legajo:7, nombre:'Mariana', apellido:'Rodriguez', sexo:'Femenino', salario:28000 },
  { legajo:8, nombre:'Fatima', apellido:'Pina', sexo:'Femenino', salario:41000}
]
radioButtonSeleccionado:string = 'Todos'

obtenerTotalEmpelados():number{
  return this.listEmpelados.length;
}
obtenerTotalFemeninos():number{
  return this.listEmpelados.filter(list => list.sexo == 'Femenino').length
}
obtenerTotalMasculinos():number{
  return this.listEmpelados.filter(list => list.sexo == 'Masculino').length
}



}
