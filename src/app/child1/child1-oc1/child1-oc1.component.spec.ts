import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1OC1Component } from './child1-oc1.component';

describe('Child1OC1Component', () => {
  let component: Child1OC1Component;
  let fixture: ComponentFixture<Child1OC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child1OC1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1OC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
