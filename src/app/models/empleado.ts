export class Empleado {
  legajo: number;
  nombre: string;
  apellido: string;
  sexo: string;
  salario: number;

  constructor( varLegajo: number, varNombre: string, varApellido: string, varSexo: string, varSalario: number) {
    this.legajo = varLegajo;
    this.nombre = varNombre;
    this.apellido = varApellido;
    this.sexo = varSexo;
    this.salario = varSalario;
  }
}
