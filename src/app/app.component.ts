import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']//enrutamos los estilos para el .css y no para el scss
})
export class AppComponent {
  title = 'Tour de Heroes';
}
