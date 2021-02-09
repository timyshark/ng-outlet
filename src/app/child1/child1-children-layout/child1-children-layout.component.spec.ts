import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1ChildrenLayoutComponent } from './child1-children-layout.component';

describe('Child1ChildrenLayoutComponent', () => {
  let component: Child1ChildrenLayoutComponent;
  let fixture: ComponentFixture<Child1ChildrenLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child1ChildrenLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1ChildrenLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
