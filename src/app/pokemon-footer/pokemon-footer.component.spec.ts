import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFooterComponent } from './pokemon-footer.component';

describe('PokemonFooterComponent', () => {
  let component: PokemonFooterComponent;
  let fixture: ComponentFixture<PokemonFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
