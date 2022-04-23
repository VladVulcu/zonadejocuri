import { Component, OnInit } from '@angular/core';
import { Genre } from '../shared/genre.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  genres: Genre[];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.genres = this.shoppingListService.getGenres();
    this.shoppingListService.genreChanged.subscribe(
      (genres: Genre[]) => {
        this.genres = genres;
      }
    );
  }
}
