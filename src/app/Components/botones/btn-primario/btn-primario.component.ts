import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-primario',
  standalone: true,
  templateUrl: './btn-primario.component.html',
  styleUrls: ['./btn-primario.component.css']
})
export class BtnPrimarioComponent {
  showSquare: boolean = false;

  toggleSquare() {
    this.showSquare = !this.showSquare;
  }
}