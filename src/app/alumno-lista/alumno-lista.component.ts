
import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumno.model';
import { AlumnoService } from '../services/alumno.service';

@Component({
  selector: 'app-alumno-lista',
  templateUrl: './alumno-lista.component.html',
  styleUrls: ['./alumno-lista.component.scss']
})
export class AlumnoListaComponent implements OnInit {
  listaAlumnos: Alumno[] = [];

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.obtenerAlumnos();
  }

  obtenerAlumnos(): void {
    this.listaAlumnos = this.alumnoService.getAlumnos();
    console.log(this.listaAlumnos);
  }
  

  calificarAlumno(alumno: Alumno): void {
    const nuevaCalificacion = Math.floor(Math.random() * 10) + 1; 
    alumno.calificacion = nuevaCalificacion;
    alumno.estado = nuevaCalificacion >= 5 ? 'Aprobado' : 'Reprobado'; 
  }
}
