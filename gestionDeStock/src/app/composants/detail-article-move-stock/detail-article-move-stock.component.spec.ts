import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArticleMoveStockComponent } from './detail-article-move-stock.component';

describe('DetailArticleMoveStockComponent', () => {
  let component: DetailArticleMoveStockComponent;
  let fixture: ComponentFixture<DetailArticleMoveStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailArticleMoveStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailArticleMoveStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
