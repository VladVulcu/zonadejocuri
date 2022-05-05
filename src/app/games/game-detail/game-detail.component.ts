import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  game: Game;
  id: number;
  constructor(private gameService: GameService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.game = this.gameService.getGame(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.gameService.addGameToShoppingList(this.game);
  }

  onEditGame() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
