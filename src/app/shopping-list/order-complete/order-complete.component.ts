import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/games/game.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css'],
})
export class OrderCompleteComponent implements OnInit {
  currentDate: Date = new Date();
  orderDate: Date = new Date();
  games: Game[];

  userData: {
    email: string,
    id: string,
    _token: string,
    _tokenExpirationDate: string
  } = JSON.parse(localStorage.getItem('userData')!);

  constructor(private shoppingListService: ShoppingListService, private router: Router) {
    this.orderDate.setDate(this.orderDate.getDate() + 2);
    this.games = this.shoppingListService.getGames();
  }

  ngOnInit(): void {
  }

  navigateBack() {
    this.shoppingListService.removesGames();
    this.router.navigate(['games']);
  }

}
