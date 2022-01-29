import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarifyEmailComponent } from './varify-email.component';

describe('VarifyEmailComponent', () => {
  let component: VarifyEmailComponent;
  let fixture: ComponentFixture<VarifyEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarifyEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
