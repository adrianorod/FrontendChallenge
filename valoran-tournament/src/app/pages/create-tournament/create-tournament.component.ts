import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayersStorageService } from '../../services/players-storage.service';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss']
})
export class CreateTournamentComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private playersStorage: PlayersStorageService,
    private router: Router
  ) { }

  tournamentForm = this.fb.group({
    player1: ['', Validators.required],
    player2: ['', Validators.required],
    player3: ['', Validators.required],
    player4: ['', Validators.required],
  });

  ngOnInit() {
  }

  onClickButton() {
    this.playersStorage.setPlayers(this.tournamentForm.value);
    this.router.navigate(['/tournament']);
  }
}
