import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSalsasComponent } from './admin-salsas.component';

describe('AdminSalsasComponent', () => {
  let component: AdminSalsasComponent;
  let fixture: ComponentFixture<AdminSalsasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSalsasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSalsasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
