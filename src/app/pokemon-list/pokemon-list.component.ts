import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListService } from '../services/pokemon-list.service';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { NgForm } from '@angular/forms';
import { Pokemon } from 'pokenode-ts';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent  implements OnInit{
  pag : number = 1 ;
  contador : number = 5;

  @Input()
  pokeBusca!: string;

  caracterePokemon!: string;
  numeroPokemon! : number;
  dadosPokemon!: Pokemon;

  mostrarShiny: boolean = false;

  constructor(public pokemonListService: PokemonListService) {
    this.pokemonListService;
  }

  ngOnInit(){
    this.pokemonListService.carregarTodosPokemons();
  }

  ajusteNumeroPokemon(urlPokemon : string) : number{
    var divisaoUrl = urlPokemon.split('pokemon/');
    var pokemonUrlDiv = divisaoUrl[1].toString();
    this.caracterePokemon = pokemonUrlDiv.replace('/', '');
    this.numeroPokemon = parseInt(this.caracterePokemon);
    return this.numeroPokemon;
  }

  isShiny(event: MatSlideToggleChange){
    this.mostrarShiny = event.checked;
  }
}
