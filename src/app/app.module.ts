import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here importando modulo ngmodule
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';//importo automaticamente HeroesComponent para delcararla automaticamente abajo
//import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent//declaro automaticamente HeroesComponent
  ],
  /* imports: [
     BrowserModule,
     AppRoutingModule
   ], importamos FormsModule y lo cambiamos por AppRoutingModule*/
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
