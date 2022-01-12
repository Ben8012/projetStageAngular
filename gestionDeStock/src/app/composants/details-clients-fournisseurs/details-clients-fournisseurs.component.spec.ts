import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsClientsFournisseursComponent } from './details-clients-fournisseurs.component';

describe('DetailsClientsFournisseursComponent', () => {
  let component: DetailsClientsFournisseursComponent;
  let fixture: ComponentFixture<DetailsClientsFournisseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsClientsFournisseursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsClientsFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
