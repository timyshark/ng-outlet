import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1LayoutComponent } from './child1-layout.component';

describe('Child1LayoutComponent', () => {
  let component: Child1LayoutComponent;
  let fixture: ComponentFixture<Child1LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child1LayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
