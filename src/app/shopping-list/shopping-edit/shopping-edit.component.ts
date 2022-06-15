import { Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/games/game.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  itemIndex: number;
  currentItem: Game;
  shoppingListItems = 0;

  games: Game[] = [];
  @ViewChild('form') form: NgForm;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.gameEditStarted.subscribe(
      (index: number) => {
        this.getShoppingListItems();
        this.itemIndex = index;
        this.currentItem = this.shoppingListService.getGame(index);
        this.form.setValue({
          name: this.currentItem.name
        })
      });
      
  }

  onAddItem(form: NgForm) {
    if (this.shoppingListService.getGames().length < 5) {
      const value = form.value;
      console.log(value);
      const newGame = new Game(value.name, value.description, value.imagePath, value.genres);
      this.shoppingListService.addGame(newGame);
    }
    this.getShoppingListItems();
  }

  onClear() {
    this.form.reset();
  }

  onDelete() {
    this.shoppingListService.deleteGame(this.itemIndex);
    this.onClear();
    this.getShoppingListItems();
  }

  getShoppingListItems() {
    this.shoppingListItems = this.shoppingListService.getGames().length;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
