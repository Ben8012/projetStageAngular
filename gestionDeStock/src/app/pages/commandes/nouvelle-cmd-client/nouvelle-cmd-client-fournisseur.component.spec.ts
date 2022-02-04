import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleCmdClientFournisseurComponent } from './nouvelle-cmd-client-fournisseur.component';

describe('NouvelleCmdClientFournisseurComponent', () => {
  let component: NouvelleCmdClientFournisseurComponent;
  let fixture: ComponentFixture<NouvelleCmdClientFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleCmdClientFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleCmdClientFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
