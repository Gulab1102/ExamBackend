import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructiosComponent } from './instructios.component';

describe('InstructiosComponent', () => {
  let component: InstructiosComponent;
  let fixture: ComponentFixture<InstructiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructiosComponent]
    });
    fixture = TestBed.createComponent(InstructiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
