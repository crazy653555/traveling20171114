import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FbComponent } from './fb/fb.component';
import { IgComponent } from './ig/ig.component';

@NgModule({
  declarations: [
    AppComponent,
    FbComponent,
    IgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
