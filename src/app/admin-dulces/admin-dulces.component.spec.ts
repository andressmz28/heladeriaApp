import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDulcesComponent } from './admin-dulces.component';

describe('AdminDulcesComponent', () => {
  let component: AdminDulcesComponent;
  let fixture: ComponentFixture<AdminDulcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDulcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDulcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
