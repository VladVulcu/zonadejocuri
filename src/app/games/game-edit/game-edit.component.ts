import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit {
  id: number;
  editMode = false;
  gameForm: FormGroup;

  constructor(private route: ActivatedRoute, private gameService: GameService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  onSubmit() {
    console.log(this.gameForm);
  }

  private initForm() {
    let gameName = '';
    let gameDescription = '';

    if (this.editMode) {
      const game = this.gameService.getGame(this.id);
      gameName = game.name;
      gameDescription = game.description;
    }

    this.gameForm = new FormGroup({
      'name': new FormControl(gameName),
      'description': new FormControl(gameDescription)
    })
  }

}
