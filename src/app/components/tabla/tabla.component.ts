
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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

  allColumns: string[] = ['numeroAlumno', 'nombre', 'apellidos', 'nif', 'edad', 'curso'];
  displayedColumns: string[] = [...this.allColumns];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  setAll(columna: string, marcado: boolean) {
    const i = this.displayedColumns.indexOf(columna);
    if (marcado && i === -1) {
      this.displayedColumns.push(columna);

    } else if (!marcado && i !== -1) {
      this.displayedColumns.splice(i, 1);
    }

  }
}




