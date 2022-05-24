import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface PokemonListItem {
  name: string,
  url: string
}

interface GetAllPokemons {
  count: number,
  results: PokemonListItem[]
}

export interface PokemonInfo {
  name: string,
  weight: number,
  height: number,
  order: number,
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      },
    }
  }
  stats: [{
    base_stat: number,
    stat: {
      name: string
    }
  }]
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  async getAllPokemons(): Promise<PokemonListItem[]> {
    const result = await this.httpClient
      .get<GetAllPokemons>('https://pokeapi.co/api/v2/pokemon?limit=2000')
      .toPromise()
    console.log('result', result);
    return result.results
  }

  async getPokemon(pokemonName: string): Promise<PokemonInfo> {
    return await this.httpClient
      .get<PokemonInfo>(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .toPromise()
  }
}
