import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServcompComponent } from './servcomp.component';

describe('ServcompComponent', () => {
  let component: ServcompComponent;
  let fixture: ComponentFixture<ServcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
