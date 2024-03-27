import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno.model';

@Injectable({
providedIn: 'root'
})
export class AlumnoService {
private alumnos: Alumno[];

constructor() {
    this.alumnos = [
        { id: 1, nombre: 'Juan', apellido: 'Pérez', calificacion: this.generarCalificacion(), estado: '' },
        { id: 2, nombre: 'María', apellido: 'Gómez', calificacion: this.generarCalificacion(), estado: '' },
        { id: 3, nombre: 'Carlos', apellido: 'Martínez', calificacion: this.generarCalificacion(), estado: '' },
        { id: 4, nombre: 'Laura', apellido: 'López', calificacion: this.generarCalificacion(), estado: '' },
        { id: 5, nombre: 'Pedro', apellido: 'Rodríguez', calificacion: this.generarCalificacion(), estado: '' },
    ];
    }

getAlumnos(): Alumno[] {
    return this.alumnos;
    }

private generarCalificacion(): number {
    const calificacion = Math.floor(Math.random() * 10) + 1; 
    const estado = calificacion >= 5 ? 'Aprobado' : 'Reprobado';
    return calificacion;
    }
}
