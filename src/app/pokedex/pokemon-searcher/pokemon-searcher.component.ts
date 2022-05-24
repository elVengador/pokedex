import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PokemonInfo, PokemonListItem, PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-searcher',
  templateUrl: './pokemon-searcher.component.html',
  styleUrls: ['./pokemon-searcher.component.css']
})
export class PokemonSearcherComponent implements OnInit {

  pokemonList: PokemonListItem[] = []
  suggestionOptions: PokemonListItem[] = []
  pokemonSelected: PokemonInfo = null
  formFilter: FormGroup = new FormGroup({
    searcher: new FormControl(''),
  })

  get searcher() { return this.formFilter.controls.searcher.value }

  constructor(private searchPokemonService: PokemonService) { }


  async ngOnInit() {
    this.pokemonList = await this.searchPokemonService.getAllPokemons()
  }

  async onSearchPokemon() {
    if (!this.searcher) { return this.suggestionOptions = [] }
    this.suggestionOptions = this.pokemonList
      .filter(cur => cur.name.includes(this.searcher))
      .sort((a, b) => {
        if (a.name > b.name) { return 1 }
        if (a.name < b.name) { return -1 }
        return 0
      })
      .slice(0, 10)
  }

  async onSelectPokemon(selectedPokemon: string) {
    this.suggestionOptions = []
    this.pokemonSelected = await this.searchPokemonService.getPokemon(selectedPokemon)
    console.log(this.pokemonSelected);
  }

  getSelectedPokemonImage() {
    return this.pokemonSelected.sprites.other['official-artwork'].front_default
  }

}
