import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLicoresComponent } from './admin-licores.component';

describe('AdminLicoresComponent', () => {
  let component: AdminLicoresComponent;
  let fixture: ComponentFixture<AdminLicoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLicoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLicoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
