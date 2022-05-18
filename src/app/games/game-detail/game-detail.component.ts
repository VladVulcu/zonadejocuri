import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  game: Game;
  id: number;
  shoppingListItems = 0;

  constructor(private gameService: GameService, private route: ActivatedRoute, private router: Router, private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.game = this.gameService.getGame(this.id);
        this.getShoppingListItems();
      });
  }
  onAddToShoppingList() {
    if (this.shoppingListService.getGames().length < 5) {
      this.gameService.addGameToShoppingList(this.game);
    }
    this.getShoppingListItems();
  }

  getShoppingListItems() {
    this.shoppingListItems = this.shoppingListService.getGames().length;
  }

}
