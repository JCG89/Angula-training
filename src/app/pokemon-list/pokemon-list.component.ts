import { Component, OnInit } from "@angular/core";
import { Pokemon } from "./../pokemon";
import { POKEMONS } from "../mock-pokemon";
import { Router } from "@angular/router";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
})
export class PokemonListComponent {
  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router: Router) {}

  pokemonDetails(pokemon: Pokemon) {
    this.router.navigate(["/pokemon", pokemon.id]);
  }
}
