import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tarea } from '../model/tarea';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  private tareasSubject = new BehaviorSubject<Tarea[]>([]);
  tareas$ = this.tareasSubject.asObservable();

  agregarTarea(tarea: Tarea): void {
    const tareasActuales = this.tareasSubject.getValue();
    this.tareasSubject.next([...tareasActuales, tarea]);
  }

  eliminarTarea(index: number): void {
    const tareasActuales = this.tareasSubject.getValue();
    tareasActuales.splice(index, 1);
    this.tareasSubject.next([...tareasActuales]);
  }
}
