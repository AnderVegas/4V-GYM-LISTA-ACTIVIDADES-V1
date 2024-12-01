import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-actividad',
  imports: [CommonModule],
  templateUrl: './actividad.component.html',
  styleUrl: './actividad.component.scss'
})
export class ActividadComponent {
  listaActividades = [
    {
      fecha: '23/10/2025',
      lugar: 'Aula02',
      monitor: 'Ander Vegas',
      tipo: 'Poleas'
    },

    {
      fecha: '12/12/2024',
      lugar: 'Aula03',
      monitor: 'Miguel Goyena',
      tipo: 'Body Pump'
    }
  ]
}
