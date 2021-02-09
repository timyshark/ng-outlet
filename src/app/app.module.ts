import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { RootLayoutComponent } from './root-layout/root-layout.component';
import { OC1Component } from './oc1/oc1.component';
import { OC2Component } from './oc2/oc2.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    RootLayoutComponent,
    OC1Component,
    OC2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
