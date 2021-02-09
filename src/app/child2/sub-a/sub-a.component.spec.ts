import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAComponent } from './sub-a.component';

describe('SubAComponent', () => {
  let component: SubAComponent;
  let fixture: ComponentFixture<SubAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
