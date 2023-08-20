import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHeladosComponent } from './admin-helados.component';

describe('AdminHeladosComponent', () => {
  let component: AdminHeladosComponent;
  let fixture: ComponentFixture<AdminHeladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHeladosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminHeladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
