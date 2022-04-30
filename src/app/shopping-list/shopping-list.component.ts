import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Genre } from '../shared/genre.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  genres: Genre[];
  private genresChangedSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.genres = this.shoppingListService.getGenres();
    this.genresChangedSubscription = this.shoppingListService.genreChanged.subscribe(
      (genres: Genre[]) => {
        this.genres = genres;
      }
    );
  }

  ngOnDestroy(): void {
    this.genresChangedSubscription.unsubscribe();
  }
}
