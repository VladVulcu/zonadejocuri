import { EventEmitter } from "@angular/core";
import { Genre } from "../shared/genre.model";

export class ShoppingListService {
    genreChanged = new EventEmitter<Genre[]>();
    private genres: Genre[] = [
        new Genre('Action'),
        new Genre('Adventure'),
      ];

    getGenres() {
        return this.genres.slice();
    }
    
    addGenre(genre: Genre) {
        this.genres.push(genre);
        this.genreChanged.emit(this.genres.slice());
    }

    addGenres(genres: Genre[]) {
        for (let genre of genres)
            this.addGenre(genre);
         this.genreChanged.emit(this.genres.slice());
    }
}