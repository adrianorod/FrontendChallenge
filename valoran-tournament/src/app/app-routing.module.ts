import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CreateTournamentComponent } from './pages/create-tournament/create-tournament.component';
import { TournamentComponent } from './pages/tournament/tournament.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-tournament', component: CreateTournamentComponent },
  { path: 'tournament', component: TournamentComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
