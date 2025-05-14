import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MensajesService {
  private mensajes = signal<string[]>([]);
  todosLosMensajes = this.mensajes.asReadonly();

  agregarMensaje(mensaje: string) {
    this.mensajes.update((mensajesPrevios) => [...mensajesPrevios, mensaje]);
  }
}
