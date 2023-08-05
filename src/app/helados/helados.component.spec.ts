import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeladosComponent } from './helados.component';

describe('HeladosComponent', () => {
  let component: HeladosComponent;
  let fixture: ComponentFixture<HeladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeladosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
