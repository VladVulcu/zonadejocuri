import { Component, OnInit } from '@angular/core';
import { Game } from './game.model';
import { GameService } from './game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers: [GameService]
})
export class GamesComponent implements OnInit {
  selectedGame: Game;
  constructor() { }

  ngOnInit(): void {
  }

}
