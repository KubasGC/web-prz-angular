import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import {MzNavbarModule, MzParallaxModule} from 'ngx-materialize';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MzNavbarModule,
    MzParallaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
