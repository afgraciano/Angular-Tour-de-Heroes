import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero'; //importo la interfaz Hero
import { HeroService } from '../hero.service';
//import { MessageService } from '../message.service';
//import { HEROES } from '../mock-heroes';
/*@Component
({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})*/

@Component({
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
export class HeroesComponent implements OnInit {
  //defina una propiedad de componente llamada heroespara exponer la HEROESmatriz para su vinculación
  // heroes = HEROES;
  //selectedHero?: Hero;//Agregue el controlador de eventos de clic

  heroes: Hero[] = [];//reemplazo la propiedad heroes por una declaracion

  constructor(private heroService: HeroService/*, private messageService: MessageService*/) { }//inyecto heroeService con parametro privado al constructor

  ngOnInit(): void { //llamada de getHeroes dentro del ciclo de vida ngOnInit despues de la construccion de la instancia HeroesComponent
    this.getHeroes();
  }

  /*onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }*/


  getHeroes(): void {  //metodo para recuperar heroes del servicio
    //this.heroes = this.heroService.getHeroes(); //devuelve un archivo observable
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
//para agregar otro nuevo heroe
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

//para eliminar un heroe
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}


