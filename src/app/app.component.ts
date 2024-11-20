import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BtnOscuroComponent } from './Components/botones/btn-oscuro/btn-oscuro.component'; // Asegúrate de que la ruta sea correcta
import { BtnPrimarioComponent } from './Components/botones/btn-primario/btn-primario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BtnOscuroComponent, BtnPrimarioComponent], // Importa el componente del botón
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
}