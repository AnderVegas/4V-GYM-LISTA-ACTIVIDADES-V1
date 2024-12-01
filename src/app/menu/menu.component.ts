import { Component } from '@angular/core';
import { LoggerService } from '../servicios/logger.service';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {  
  
  constructor(private logger : LoggerService) { }

  mostrarActividades() {
    this.logger.cambiarVista(false); 
  }

}
