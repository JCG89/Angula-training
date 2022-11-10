import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { DetailsPokemonComponent } from "./details-pokemon/details-pokemon.component";
import { PageNoFoundComponent } from './page-no-found/page-no-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonListComponent,
    DetailsPokemonComponent,
    PageNoFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
