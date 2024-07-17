import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrl: './count-empleados.component.css',
})
export class CountEmpleadosComponent {
  @Input() todos:number = 0;   @Input() masculinos:number = 0;   @Input() femeninos:number = 0; 
  @Output() countRadioButtonChange = new EventEmitter<string>()


  radioButtonSeleccionado: string = 'Todos';


  radioChange():void {
    this.countRadioButtonChange.emit(this.radioButtonSeleccionado)
  }

  
}
