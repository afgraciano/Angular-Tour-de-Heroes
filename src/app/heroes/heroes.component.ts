import { Component } from '@angular/core';
import { Hero } from '../hero'; //importo la interfaz Hero
import { HEROES } from '../mock-heroes';


/*@Component
({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})*/

@Component
  ({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
  })
/*export class HeroesComponent
{//refactorizo la propiedad del componente hero para que sea tipo Hero. inicializo con un id de 1 y el nombre Windstorm
  hero: Hero =
  {
    id: 1,
    name: 'Windstorm'
  };
}*/
export class HeroesComponent {
  //defina una propiedad de componente llamada heroespara exponer la HEROESmatriz para su vinculación
  heroes = HEROES;
  //Agregue el controlador de eventos de clic
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
