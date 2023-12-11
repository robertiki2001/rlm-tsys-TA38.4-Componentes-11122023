import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Tarea } from './model/tarea';
import { CommonModule } from '@angular/common';
import { FormularioTareaComponent } from './componentes/formulario-tarea/formulario-tarea.component';
import { ListaTareasComponent } from './componentes/lista-tareas/lista-tareas.component';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, FormularioTareaComponent, ListaTareasComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TA34_Componentes';
  tareas: Tarea[] = [];

  constructor(private tareasService: TareasService) {}

  agregarTarea(nuevaTarea: Tarea): void {
    this.tareasService.agregarTarea(nuevaTarea);
  }
}
