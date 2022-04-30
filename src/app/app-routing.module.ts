import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailComponent } from './games/game-detail/game-detail.component';
import { GameEditComponent } from './games/game-edit/game-edit.component';
import { GameStartComponent } from './games/game-start/game-start.component';
import { GamesComponent } from './games/games.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/games', pathMatch: 'full'},
  {path: 'games', component: GamesComponent, children: [
    {path: '', component: GameStartComponent},
    {path: 'new', component: GameEditComponent},
    {path: ':id', component: GameDetailComponent},
    {path: ':id/edit', component: GameEditComponent}
  ]},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
