import { Component, Input } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { NamedAPIResource, Pokemon } from 'pokenode-ts';
import { PokemonListService } from '../services/pokemon-list.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {

  constructor(public pokemonListService: PokemonListService) {
    this.pokemonListService;
  }
  
  @Input()
  pokemon!: string;

  @Input()
  numero!: number;

  @Input() 
  mostrarShiny: boolean = false;

  pegarImagemPokemon() {
    const numeroFormatado = this.numero;
    let linkImagem = "";
      if(this.mostrarShiny == false){
         linkImagem = this.pokemonListService.caminhoImagem(numeroFormatado);
      }
      else{
         linkImagem = this.pokemonListService.caminhoShinyImagem(numeroFormatado);
      }
    return linkImagem;
  }

  isShiny(event: MatSlideToggleChange){
    this.mostrarShiny = event.checked;
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }

    return s;
  }
}

