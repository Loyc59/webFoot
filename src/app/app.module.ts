import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ResultatsComponent } from './resultats/resultats.component';
import { Senior1Component } from './classements/senior1/senior1.component';
import { Senior2Component } from './classements/senior2/senior2.component';
import { U13Component } from './classements/u13/u13.component';
import { U111Component } from './classements/u11-1/u11-1.component';
import { U112Component } from './classements/u11-2/u11-2.component';
import { U17Component } from './classements/u17/u17.component';
import { U15Component } from './classements/u15/u15.component';
import { FemComponent } from './classements/fem/fem.component';
import { Vet11Component } from './classements/vet11/vet11.component';
import { Vet7Component } from './classements/vet7/vet7.component';

const appRoutes: Routes = [
  { path: 'senior1', component: Senior1Component },
  { path: 'senior2', component: Senior2Component },
  { path: 'fem', component: FemComponent },
  { path: 'vet7', component: Vet7Component },
  { path: 'vet11', component: Vet11Component },
  { path: 'u111', component: U111Component },
  { path: 'u112', component: U112Component },
  { path: 'u13', component: U13Component },
  { path: 'u15', component: U15Component },
  { path: 'u17', component: U17Component },
];

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    ResultatsComponent,
    Senior1Component,
    Senior2Component,
    U13Component,
    U111Component,
    U112Component,
    U17Component,
    U15Component,
    FemComponent,
    Vet11Component,
    Vet7Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
