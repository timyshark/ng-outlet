import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OC1Component } from './oc1.component';

describe('OC1Component', () => {
  let component: OC1Component;
  let fixture: ComponentFixture<OC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OC1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
