import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';//para capacidad de enrutamiento de la app

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';//lugar a donde va a ir una vez configura las rutas
import { HeroDetailComponent } from './hero-detail/hero-detail.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },//agrego ruta predeterminada
  { path: 'dashboard', component: DashboardComponent },//agrego ruta matrizdel dashboard
  { path: 'detail/:id', component: HeroDetailComponent },//ruta que coincide con patron de ruta con la vista detallada del heroe
  { path: 'heroes', component: HeroesComponent }//configuracion de las rutas

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//el método forRoot proporciona los proveedores de servicios y las directivas necesarias para el enrutamiento y realiza la navegación inicial según la URL actual del navegador
  exports: [RouterModule]//con esto estara disponible en toda la app
})
export class AppRoutingModule { }
