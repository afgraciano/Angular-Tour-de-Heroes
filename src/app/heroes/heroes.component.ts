import { Component } from '@angular/core';
import { Hero } from '../hero'; //importo la interfaz Hero

@Component
({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent
{//refactorizo la propiedad del componente hero para que sea tipo Hero. inicializo con un id de 1 y el nombre Windstorm
  hero: Hero =
  {
    id: 1,
    name: 'Windstorm'
  };
}
