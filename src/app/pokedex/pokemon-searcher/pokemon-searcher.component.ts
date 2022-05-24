import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pokemon-searcher',
  templateUrl: './pokemon-searcher.component.html',
  styleUrls: ['./pokemon-searcher.component.css']
})
export class PokemonSearcherComponent implements OnInit {

  formFilter: FormGroup = new FormGroup({
    searcher: new FormControl(''),
  })

  get searcher() { return this.formFilter.controls.searcher.value }

  constructor() { }


  ngOnInit(): void {
  }

  onSearchPokemon() {
    console.log('search text', this.formFilter.controls.searcher.value);
  }

}
