import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PageNoFoundComponent } from "./page-no-found/page-no-found.component";
import { DetailsPokemonComponent } from "./details-pokemon/details-pokemon.component";

const routes: Routes = [
  { path: "pokemons", component: PokemonListComponent },
  { path: "pokemon/:id", component: DetailsPokemonComponent },
  { path: "", redirectTo: "pokemons", pathMatch: "full" },
  { path: "**", component: PageNoFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
