import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2LayoutComponent } from './child2-layout.component';

describe('Child2LayoutComponent', () => {
  let component: Child2LayoutComponent;
  let fixture: ComponentFixture<Child2LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child2LayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child2LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
