import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMovestockComponent } from './page-movestock.component';

describe('PageMovestockComponent', () => {
  let component: PageMovestockComponent;
  let fixture: ComponentFixture<PageMovestockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMovestockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMovestockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
