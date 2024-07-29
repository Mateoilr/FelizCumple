import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartaComponent } from "../carta/carta.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CartaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Feliz Cumple';
}
