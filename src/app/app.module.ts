import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MuralVagasComponent } from './mural-vagas/mural-vagas.component';


@NgModule({
  declarations: [
    AppComponent,
    MuralVagasComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
