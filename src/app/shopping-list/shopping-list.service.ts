import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Game } from "../games/game.model";

@Injectable()
export class ShoppingListService {

    api_url = "https://localhost:44340/api/Order";

    gameEditStarted = new Subject<number>();
    gameChanged = new Subject<Game[]>();
    private games: Game[] = [];

    constructor(private http: HttpClient) {}

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

    removeGames() {
        this.games = [];
        this.gameChanged.next(this.games.slice());
    }

    addOrder(order: Object) {
       return this.http.post(this.api_url + '/CreateOrder', order);
    }
}