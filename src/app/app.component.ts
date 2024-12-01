import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ListadoComponent } from './listado/listado.component';
import { LoggerService } from './servicios/logger.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MenuComponent,ListadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Actividades GYM 4V';
  vistaActividades: boolean = true;

  constructor(private logger: LoggerService) {}

  ngOnInit() {
    this.logger.vistaActividades$.subscribe(
      (estado) => (this.vistaActividades = estado)
    );
  }

  
}
