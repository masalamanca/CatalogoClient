import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoUComponent } from './catalogo-u.component';

describe('CatalogoUComponent', () => {
  let component: CatalogoUComponent;
  let fixture: ComponentFixture<CatalogoUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
