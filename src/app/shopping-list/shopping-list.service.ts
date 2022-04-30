import { Subject } from "rxjs";
import { Genre } from "../shared/genre.model";

export class ShoppingListService {
    genreChanged = new Subject<Genre[]>();
    private genres: Genre[] = [
        new Genre('Action'),
        new Genre('Adventure'),
      ];

    getGenres() {
        return this.genres.slice();
    }
    
    addGenre(genre: Genre) {
        this.genres.push(genre);
        this.genreChanged.next(this.genres.slice());
    }

    addGenres(genres: Genre[]) {
        for (let genre of genres)
            this.addGenre(genre);
         this.genreChanged.next(this.genres.slice());
    }
}