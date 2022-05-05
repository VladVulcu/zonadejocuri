import { Subject } from "rxjs";
import { Game } from "../games/game.model";

export class ShoppingListService {
    gameEditStarted = new Subject<number>();
    gameChanged = new Subject<Game[]>();
    private games: Game[] = [];

    getGames() {
        return this.games.slice();
    }

    getGame(index: number) {
        return this.games[index];
    }

    addGame(game: Game) {
        this.games.push(game);
        this.gameChanged.next(this.games.slice());
    }

    deleteGame(index: number) {
        this.games.splice(index, 1);
        this.gameChanged.next(this.games.slice());
    }
}