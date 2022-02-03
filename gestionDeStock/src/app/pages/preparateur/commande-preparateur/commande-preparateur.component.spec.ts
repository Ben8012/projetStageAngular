import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandePreparateurComponent } from './commande-preparateur.component';

describe('CommandePreparateurComponent', () => {
  let component: CommandePreparateurComponent;
  let fixture: ComponentFixture<CommandePreparateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandePreparateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandePreparateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
