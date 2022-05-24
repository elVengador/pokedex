import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonSearcherComponent } from './pokemon-searcher/pokemon-searcher.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: PokemonSearcherComponent },
];

@NgModule({
  declarations: [
    PokemonSearcherComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class PokedexModule { }
