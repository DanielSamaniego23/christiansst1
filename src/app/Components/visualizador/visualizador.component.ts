import { Component } from '@angular/core';
import { BtnOscuroComponent } from '../botones/btn-oscuro/btn-oscuro.component';

@Component({
  selector: 'app-visualizador',
  standalone: true,
  imports: [BtnOscuroComponent],
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css']
})
export class VisualizadorComponent {
  // Aquí puedes agregar la lógica adicional que necesites
}