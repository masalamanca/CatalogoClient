import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByCatalogComponent } from './product-by-catalog.component';

describe('ProductByCatalogComponent', () => {
  let component: ProductByCatalogComponent;
  let fixture: ComponentFixture<ProductByCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductByCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductByCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
