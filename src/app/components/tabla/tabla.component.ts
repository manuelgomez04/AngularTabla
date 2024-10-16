
import { Component } from '@angular/core';

export interface PeriodicElement {
  numeroAlumno: number;
  nombre: string;
  apellidos: string;
  nif: string;
  edad: number;
  curso: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { numeroAlumno: 1, nombre: 'Manuel', apellidos: 'García', nif: '12345678A', edad: 20, curso: '1º DAM' },
  { numeroAlumno: 2, nombre: 'María', apellidos: 'González', nif: '87654321B', edad: 21, curso: '2º DAM' },
  { numeroAlumno: 3, nombre: 'Carlos', apellidos: 'Pérez', nif: '12348765C', edad: 22, curso: '1º DAM' },
  { numeroAlumno: 4, nombre: 'Ana', apellidos: 'Martínez', nif: '56781234D', edad: 23, curso: '2º DAM' },
  { numeroAlumno: 5, nombre: 'Javier', apellidos: 'Sánchez', nif: '43215678E', edad: 24, curso: '1º DAM' },




];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
})
export class TablaComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
