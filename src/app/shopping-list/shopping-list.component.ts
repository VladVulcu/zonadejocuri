import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from '../games/game.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  games: Game[];
  private gameChangedSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {

    this.games = this.shoppingListService.getGames();
    this.gameChangedSubscription = this.shoppingListService.gameChanged.subscribe(
      (games: Game []) => {
        this.games = games;
        console.log(this.games);
      }
    );
  }

  onEditItem(index: number) {
    this.shoppingListService.gameEditStarted.next(index);
  }

  ngOnDestroy(): void {
    this.gameChangedSubscription.unsubscribe();
  }
}
