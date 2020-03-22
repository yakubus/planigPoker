
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { Parser } from '@angular/compiler/src/ml_parser/parser';
import { mongoose } from '@angular/mongoose';

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Parser,
    mongodb
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
