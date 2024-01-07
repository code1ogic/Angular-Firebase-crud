import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GateAccessComponent } from './gate-access.component';

describe('GateAccessComponent', () => {
  let component: GateAccessComponent;
  let fixture: ComponentFixture<GateAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GateAccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GateAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
