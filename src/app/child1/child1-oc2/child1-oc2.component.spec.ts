import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1OC2Component } from './child1-oc2.component';

describe('Child1OC2Component', () => {
  let component: Child1OC2Component;
  let fixture: ComponentFixture<Child1OC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child1OC2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1OC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
