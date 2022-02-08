import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleCmdFournisseurComponent } from './nouvelle-cmd-fournisseur.component';

describe('NouvelleCmdFournisseurComponent', () => {
  let component: NouvelleCmdFournisseurComponent;
  let fixture: ComponentFixture<NouvelleCmdFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleCmdFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleCmdFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
