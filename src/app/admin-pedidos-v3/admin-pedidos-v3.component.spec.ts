import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPedidosV3Component } from './admin-pedidos-v3.component';

describe('AdminPedidosV3Component', () => {
  let component: AdminPedidosV3Component;
  let fixture: ComponentFixture<AdminPedidosV3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPedidosV3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPedidosV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
