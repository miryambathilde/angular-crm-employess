import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  empleado: Empleado;
  @Output() empleadoEnviado: EventEmitter<Empleado>;

  constructor() {
    this.empleado = {
      name: '',
      surname: '',
      dni: '',
      email: '',
      photo: '',
      department: '',
      status: true
    };

    this.empleadoEnviado = new EventEmitter();
  }

  ngOnInit(): void {}

  getDataForm(pFormEmpleados: any) {
    //console.log(pFormEmpleados.value);
    pFormEmpleados.value.status = true;
    this.empleadoEnviado.emit(pFormEmpleados.value);
    pFormEmpleados.resetForm({});
  }
}
