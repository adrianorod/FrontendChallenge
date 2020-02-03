import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CreateTournamentComponent } from './pages/create-tournament/create-tournament.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TournamentComponent } from './pages/tournament/tournament.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateTournamentComponent,
    TournamentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
