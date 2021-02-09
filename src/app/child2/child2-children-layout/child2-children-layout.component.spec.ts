import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2ChildrenLayoutComponent } from './child2-children-layout.component';

describe('Child2ChildrenLayoutComponent', () => {
  let component: Child2ChildrenLayoutComponent;
  let fixture: ComponentFixture<Child2ChildrenLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child2ChildrenLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child2ChildrenLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
