import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonClient, NamedAPIResource, MainClient, Pokemon } from 'pokenode-ts';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  allPokemons!: NamedAPIResource[];
  dadosPokemon!: Pokemon;
  contagemPokemon!: number;

  constructor(private httpClient: HttpClient) {
  }

  async carregarTodosPokemons() {
    const api = new MainClient();
    
      await api.pokemon.listPokemons(0, 1154)
        .then((data) => this.allPokemons = data.results  as NamedAPIResource[])
        .catch((error) => console.error(error));
        
    this.contagemPokemon = this.allPokemons.length;
  }

  caminhoImagem(numeroFormatado : number) : string{
    const imagemÇLink = 
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/` + numeroFormatado + `.png`;

    return imagemÇLink;
  }

  
  caminhoShinyImagem(numeroFormatado : number) : string{
    const imagemÇLink = 
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/` + numeroFormatado + `.png`;
 
    return imagemÇLink;
  }

}
