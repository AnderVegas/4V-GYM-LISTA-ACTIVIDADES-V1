import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const NOMBRE_APP = "4V GYM APP";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private vistaActividadesSubject = new BehaviorSubject<boolean>(true);
  vistaActividades$ = this.vistaActividadesSubject.asObservable();

  constructor() { }

  logDebug(mensaje: string){
    alert('DEBUG: ' + NOMBRE_APP + ': '  + mensaje);
  }

  logError(mensaje: string){
    console.error('ERROR: ' + NOMBRE_APP + ': ' + mensaje);
  }

  cambiarVista(estado: boolean) {
    this.vistaActividadesSubject.next(estado);
  }

}
