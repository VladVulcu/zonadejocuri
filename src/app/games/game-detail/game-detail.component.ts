import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  @Input() game: Game;
  constructor(private gameservice: GameService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList() {
    this.gameservice.addIngredietsToShoppingList(this.game.genres);
  }

}
