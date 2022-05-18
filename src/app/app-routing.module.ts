import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { ContactComponent } from './contact/contact.component';
import { GameDetailComponent } from './games/game-detail/game-detail.component';
import { GameStartComponent } from './games/game-start/game-start.component';
import { GamesComponent } from './games/games.component';
import { OrderCompleteComponent } from './shopping-list/order-complete/order-complete.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/games', pathMatch: 'full'},
  {path: 'games', component: GamesComponent, canActivate: [AuthGuard], children: [
    {path: '', component: GameStartComponent},
    {path: ':id', component: GameDetailComponent},
  ]},
  {path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard]}, 
  {path: 'order-complete', component: OrderCompleteComponent, canActivate: [AuthGuard]},
  {path: 'contact', component: ContactComponent, canActivate: [AuthGuard]},
  {path: 'auth', component: AuthComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
