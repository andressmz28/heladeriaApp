import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminToppingsComponent } from './admin-toppings.component';

describe('AdminToppingsComponent', () => {
  let component: AdminToppingsComponent;
  let fixture: ComponentFixture<AdminToppingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminToppingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminToppingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
