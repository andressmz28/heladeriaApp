import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPedidosV2Component } from './admin-pedidos-v2.component';

describe('AdminPedidosV2Component', () => {
  let component: AdminPedidosV2Component;
  let fixture: ComponentFixture<AdminPedidosV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPedidosV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPedidosV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
