import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonSearcherComponent } from './pokemon-searcher/pokemon-searcher.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokeCardComponent } from './pokemon-searcher/components/poke-card/poke-card.component';

const routes: Routes = [
  { path: '', component: PokemonSearcherComponent },
];

@NgModule({
  declarations: [
    PokemonSearcherComponent,
    PokeCardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PokedexModule { }
