import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { OC1Component } from './oc1/oc1.component';
import { OC2Component } from './oc2/oc2.component';
import { RootLayoutComponent } from './root-layout/root-layout.component';

const routes: Routes = [
  { path: '', component: RootLayoutComponent },
  { path: 'a', component: AComponent },
  { path: 'b', component: BComponent },
  { path: 'child1', loadChildren: () => import('./child1/child1.module').then(m => m.Child1Module) },
  { path: 'child2', loadChildren: () => import('./child2/child2.module').then(m => m.Child2Module) },
  { path: 'oc1', component: OC1Component, outlet: 'outlet1' },
  { path: 'oc2', component: OC2Component, outlet: 'outlet2' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
