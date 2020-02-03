import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersStorageService } from 'src/app/services/players-storage.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  constructor(private playersService: PlayersStorageService, private router: Router) { }

  players: object;
  tournament: Array<string>;

  ngOnInit() {
    this.players = this.playersService.getPlayers();

    if (this.players) {
      this._mountPlayers();
    } else {
      this.router.navigate(['']);
    }
  }

  private _mountPlayers() {
    this.tournament = Object.entries(this.players).map((item) => item[1]);
  }

  startTournament() {
    if (this.tournament.length >= 2) {
      const totalPlayers = this.tournament.length;
      const reduceTo = totalPlayers / 2;

      for (let i = 1; reduceTo >= i; i++) {
        const remove = Math.floor(Math.random() * (totalPlayers - 1));
        this.tournament = this.tournament.filter((item) => item !== this.tournament[remove]);
      }
    }
  }

  reset() {
    this.router.navigate(['']);
  }
}
