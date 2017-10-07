import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ResultatsComponent } from './resultats/resultats.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    ResultatsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
