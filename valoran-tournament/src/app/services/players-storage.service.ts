import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersStorageService {

  constructor() { }

  setPlayers(data) {
    sessionStorage.setItem('players', JSON.stringify(data));
  }

  getPlayers() {
    return JSON.parse(sessionStorage.getItem('players'));
  }
}
