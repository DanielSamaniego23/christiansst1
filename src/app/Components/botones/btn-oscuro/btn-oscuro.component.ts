import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-oscuro',
  standalone: true,
  templateUrl: './btn-oscuro.component.html',
  styleUrls: ['./btn-oscuro.component.css']
})
export class BtnOscuroComponent {
  isDarkTheme: boolean = false;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
  }
}