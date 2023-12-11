// lista-tareas.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarea } from '../../model/tarea';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css'],
})
export class ListaTareasComponent implements OnInit {
  tareas: Tarea[] = [];

  constructor(private tareasService: TareasService) {}

  ngOnInit(): void {
    this.tareasService.tareas$.subscribe((tareas) => {
      this.tareas = tareas;
    });
  }

  marcarComoCompletada(tarea: Tarea): void {
    tarea.completada = !tarea.completada;
  }

  eliminarTarea(index: number): void {
    this.tareasService.eliminarTarea(index);
  }
}
