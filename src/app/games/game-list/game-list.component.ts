import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @Output() gameSelected = new EventEmitter<Game>();
  games: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.games = this.gameService.getGames();
  }

  onGameSelected(game: Game) {
    this.gameSelected.emit(game);
  }

}
