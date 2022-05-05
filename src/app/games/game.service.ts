import { Injectable } from "@angular/core";
import { Genre } from "../shared/genre.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Game } from "./game.model";

@Injectable()
export class GameService {

    private games: Game[] = [
        new Game('FIFA 22', 'Take part in the new FIFA 22', '../../assets/fifa22.jpg', [new Genre('Sports'), new Genre('Single-/Multiplayer'), new Genre('Competition')]),
        new Game('Spider Man', 'Peter Parker fighting big crime in New York.', '../../assets/spiderman.jpg', [new Genre('Open-World'), new Genre('Adventure'), new Genre('Crime')]),
        new Game('Ratchet & Clank', 'Experience the new Ratchet & Clank adventure', '../../assets/ratchetclank.jpg', [new Genre('Open-World'), new Genre('Adventure'), new Genre('Mission-System')]),
        new Game('Ratchet & Clank', 'Experience the new Ratchet & Clank adventure', '../../assets/ratchetclank.jpg', [new Genre('Open-World'), new Genre('Adventure'), new Genre('Mission-System')]),
        new Game('Ratchet & Clank', 'Experience the new Ratchet & Clank adventure', '../../assets/ratchetclank.jpg', [new Genre('Open-World'), new Genre('Adventure'), new Genre('Mission-System')]),
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