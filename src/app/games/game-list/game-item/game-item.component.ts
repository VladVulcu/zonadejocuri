import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Game } from '../../game.model';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit {
  @Input() game: Game;
  @Output() itemSelected = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {
  }

  onItemSelection() {
    this.itemSelected.emit();
  }

}
