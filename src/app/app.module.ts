import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here importando modulo ngmodule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';//importo automaticamente HeroesComponent para delcararla automaticamente abajo

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent//declaro automaticamente HeroesComponent
  ],
 /* imports: [
    BrowserModule,
    AppRoutingModule
  ], importamos FormsModule y lo cambiamos por AppRoutingModule*/
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
