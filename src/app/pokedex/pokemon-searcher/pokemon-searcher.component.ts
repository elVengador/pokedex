import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-searcher',
  templateUrl: './pokemon-searcher.component.html',
  styleUrls: ['./pokemon-searcher.component.css']
})
export class PokemonSearcherComponent implements OnInit {

  searcher: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
