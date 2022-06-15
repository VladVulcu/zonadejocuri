import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../auth/user.model';
import { Game } from '../games/game.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  games: Game[];
  user: User;
  private gameChangedSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService, private router: Router) {
  }

  ngOnInit(): void {
    this.games = this.shoppingListService.getGames();
    this.gameChangedSubscription = this.shoppingListService.gameChanged.subscribe(
      (games: Game []) => {
        this.games = games;
      });
  }

  onEditItem(index: number) {
    this.shoppingListService.gameEditStarted.next(index);
  }

  onSend() {
    const userData: {
      email: string,
      id: string,
      _token: string,
      _tokenExpirationDate: string
  } = JSON.parse(localStorage.getItem('userData')!);
  
     var order = {
      name: userData.email,
      product1: this.games[0].name,
      product2: this.games[1]?.name,
      product3: this.games[2]?.name,
      product4: this.games[3]?.name,
      product5: this.games[4]?.name
    }
    this.shoppingListService.addOrder(order).subscribe();
    this.router.navigate(['order-complete']);
 }

  ngOnDestroy(): void {
    this.gameChangedSubscription.unsubscribe();
  }
}
