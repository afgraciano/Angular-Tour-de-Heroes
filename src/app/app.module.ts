
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here importando modulo ngmodule
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';//importo automaticamente HeroesComponent para delcararla automaticamente abajo
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({

  /* imports: [
     BrowserModule,
     AppRoutingModule
   ], importamos FormsModule y lo cambiamos por AppRoutingModule*/
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule//reingresamos AppRoutingModule para las rutas de ir a otra pagina
  ],
  declarations: [
    AppComponent,
    DashboardComponent,//declaro automaticamente HeroesComponent
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent

  ],
  /*providers: [ // no need to place any providers due to the `providedIn` flag...
  ],*/
  bootstrap: [AppComponent]
})
export class AppModule { }
