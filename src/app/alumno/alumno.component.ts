import { Component, Input } from '@angular/core';
import { Alumno } from '../models/alumno.model';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent {
  @Input() alumno?: Alumno;

  constructor() { }

  calificarAlumno(alumno: Alumno, calificacion: number): void {
    alumno.calificacion = calificacion;
}

}
