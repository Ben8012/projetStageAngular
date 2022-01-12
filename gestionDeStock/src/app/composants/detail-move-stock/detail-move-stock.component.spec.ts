import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMoveStockComponent } from './detail-move-stock.component';

describe('DetailMoveStockComponent', () => {
  let component: DetailMoveStockComponent;
  let fixture: ComponentFixture<DetailMoveStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMoveStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMoveStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
