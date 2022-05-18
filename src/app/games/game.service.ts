import { Injectable } from "@angular/core";
import { Genre } from "../shared/genre.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Game } from "./game.model";

@Injectable()
export class GameService {



    private games: Game[] = [
        new Game('Soccer Cup', 'Cel mai nou joc de fotbal', '../../assets/fotbal.jpg', [new Genre('Sport'), new Genre('Single-/Multiplayer'), new Genre('Competiție')]),
        new Game('Ultimate Boxing', 'Devino campion', '../../assets/box.jpg', [new Genre('Sport'), new Genre('Violență'), new Genre('Competiție')]),
        new Game('Mar.io', 'O aventură alături de Mar.io', '../../assets/mario.jpg', [new Genre('Singleplayer'), new Genre('Aventură'), new Genre('Acțiune')]),
        new Game('Dunk The Ball', 'Cel mai nou joc de baschet', '../../assets/baschet.jpg', [new Genre('Sport'), new Genre('Single-/Multiplayer'), new Genre('Acțiune')]),
        new Game('Chess Sim2k22', 'Învinge calculatorul la șah', '../../assets/sah.jpg', [new Genre('Singleplayer'), new Genre('Strategie'), new Genre('Sport')]),
      ];

      constructor(private shoppingListService: ShoppingListService) { }

      getGames() {
        return this.games.slice();
      }

      getGame(id: number) {
        return this.games[id];
      }

      addGameToShoppingList(game: Game) {
        this.shoppingListService.addGame(game);
      }

}