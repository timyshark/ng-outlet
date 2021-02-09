import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubAComponent } from './sub-a/sub-a.component';
import { SubBComponent } from './sub-b/sub-b.component';
import { Child2LayoutComponent } from './child2-layout/child2-layout.component';
import { Child2ChildrenLayoutComponent } from './child2-children-layout/child2-children-layout.component';
import { Routes, RouterModule } from '@angular/router';

const child2Routes: Routes = [
  {
    path: '',
    component: Child2LayoutComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'sub-a', component: SubAComponent },
          { path: 'sub-b', component: SubBComponent },
          { path: '', component: Child2ChildrenLayoutComponent }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [SubAComponent, SubBComponent, Child2LayoutComponent, Child2ChildrenLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(child2Routes)
  ]
})
export class Child2Module { }
