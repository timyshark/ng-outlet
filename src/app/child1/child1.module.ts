import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';
import { Child1LayoutComponent } from './child1-layout/child1-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { Child1ChildrenLayoutComponent } from './child1-children-layout/child1-children-layout.component';
import { Child1OC1Component } from './child1-oc1/child1-oc1.component';
import { Child1OC2Component } from './child1-oc2/child1-oc2.component';

const child1Routes: Routes = [
  {
    path: 'child1-oc1',
    component: Child1OC1Component,
    outlet: 'outlet1'
  },
  {
    path: 'child1-oc2',
    component: Child1OC1Component,
    outlet: 'outlet2'
  },
  {
    path: '',
    component: Child1LayoutComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'sub-1', component: Sub1Component },
          { path: 'sub-2', component: Sub2Component },
          { path: '', component: Child1ChildrenLayoutComponent }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [Sub1Component, Sub2Component, Child1LayoutComponent,Child1ChildrenLayoutComponent, Child1OC1Component, Child1OC2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(child1Routes)
  ]
})
export class Child1Module { }
