import { Component, Output, EventEmitter } from '@angular/core';
import { Tarea } from '../../model/tarea';
import { FormsModule } from '@angular/forms';
import { TareasService } from '../../services/tareas.service';

@Component({
  selector: 'app-formulario-tarea',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './formulario-tarea.component.html',
  styleUrls: ['./formulario-tarea.component.css'],
})
export class FormularioTareaComponent {
  @Output() agregarTarea = new EventEmitter<Tarea>();
  nuevaTarea: Tarea = { titulo: '', descripcion: '', completada: false };

  constructor(private tareasService: TareasService) {}

  agregar(): void {
    this.agregarTarea.emit(this.nuevaTarea);
    this.nuevaTarea = { titulo: '', descripcion: '', completada: false };
  }
}
