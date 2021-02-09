import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OC2Component } from './oc2.component';

describe('OC2Component', () => {
  let component: OC2Component;
  let fixture: ComponentFixture<OC2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OC2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
