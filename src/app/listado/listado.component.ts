import { Component } from '@angular/core';
import { ActividadComponent } from '../actividad/actividad.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado',
  imports: [ActividadComponent,CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss'
})
export class ListadoComponent {
  
}
