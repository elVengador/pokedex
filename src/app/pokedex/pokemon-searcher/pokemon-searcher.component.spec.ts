import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSearcherComponent } from './pokemon-searcher.component';

describe('PokemonSearcherComponent', () => {
  let component: PokemonSearcherComponent;
  let fixture: ComponentFixture<PokemonSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonSearcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
