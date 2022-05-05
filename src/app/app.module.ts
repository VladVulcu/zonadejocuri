import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GamesComponent } from './games/games.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { GameDetailComponent } from './games/game-detail/game-detail.component';
import { GameItemComponent } from './games/game-list/game-item/game-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { GameStartComponent } from './games/game-start/game-start.component';
import { GameEditComponent } from './games/game-edit/game-edit.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GamesComponent,
    GameListComponent,
    GameDetailComponent,
    GameItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    GameStartComponent,
    GameEditComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
