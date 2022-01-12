import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCmdClientFournisseurComponent } from './details-cmd-client-fournisseur.component';

describe('DetailsCmdClientFournisseurComponent', () => {
  let component: DetailsCmdClientFournisseurComponent;
  let fixture: ComponentFixture<DetailsCmdClientFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCmdClientFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCmdClientFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
