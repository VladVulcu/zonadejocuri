import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: Game[];

  constructor(private gameService: GameService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.games = this.gameService.getGames();
  }

  onNewGame() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
