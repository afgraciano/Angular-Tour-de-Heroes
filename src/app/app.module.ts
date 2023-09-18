
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here importando modulo ngmodule
import { HttpClientModule } from '@angular/common/http'; //agrego a raiz el httpclient module importandolo

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';//importo automaticamente HeroesComponent para delcararla automaticamente abajo
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


import { HeroesComponent } from './heroes/heroes.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';



@NgModule({

  /* imports: [
     BrowserModule,
     AppRoutingModule
   ], importamos FormsModule y lo cambiamos por AppRoutingModule*/
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,//reingresamos AppRoutingModule para las rutas de ir a otra pagina
    HttpClientModule, //para poner el httpclient a disposicion en todas partes

      // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(  //El forRoot()método de configuración toma una InMemoryDataServiceclase que prepara la base de datos en memoria.
      InMemoryDataService, { dataEncapsulation: false }//El in-memory-data.service.tsarchivo asume la función de mock-heroes.ts
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,//declaro automaticamente HeroesComponent
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent
  ],
  /*providers: [ // no need to place any providers due to the `providedIn` flag...
  ],*/
  bootstrap: [AppComponent]
})
export class AppModule { }
