import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptomonedaComponent } from './cryptomoneda.component';

describe('CryptomonedaComponent', () => {
  let component: CryptomonedaComponent;
  let fixture: ComponentFixture<CryptomonedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptomonedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptomonedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
