import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonHeaderComponent } from './pokemon-header/pokemon-header.component';
import { PokemonFooterComponent } from './pokemon-footer/pokemon-footer.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListService } from './services/pokemon-list.service';

import { NgxPaginationModule } from 'ngx-pagination';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    PokemonHeaderComponent,
    PokemonFooterComponent,
    PokemonListComponent,
    PokemonCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    AgGridModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [PokemonListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
