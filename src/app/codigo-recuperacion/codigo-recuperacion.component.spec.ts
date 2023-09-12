import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoRecuperacionComponent } from './codigo-recuperacion.component';

describe('CodigoRecuperacionComponent', () => {
  let component: CodigoRecuperacionComponent;
  let fixture: ComponentFixture<CodigoRecuperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodigoRecuperacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodigoRecuperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
