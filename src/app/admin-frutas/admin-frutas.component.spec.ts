import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFrutasComponent } from './admin-frutas.component';

describe('AdminFrutasComponent', () => {
  let component: AdminFrutasComponent;
  let fixture: ComponentFixture<AdminFrutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFrutasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
