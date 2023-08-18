import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEspecialesComponent } from './admin-especiales.component';

describe('AdminEspecialesComponent', () => {
  let component: AdminEspecialesComponent;
  let fixture: ComponentFixture<AdminEspecialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEspecialesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEspecialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
