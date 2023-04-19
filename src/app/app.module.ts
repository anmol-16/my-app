import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cmp1Component } from './cmp1/cmp1.component';
import { Cmp2Component } from './cmp2/cmp2.component';
import { NumToWordsPipe } from './num-to-words.pipe';
import { Feature1Module } from './feature1/feature1.module';
import { Feature2Module } from './feature2/feature2.module';
import { Feature3Module } from './feature3/feature3.module';

@NgModule({
  declarations: [
    AppComponent,
    Cmp1Component,
    Cmp2Component,
    NumToWordsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Feature1Module,
    Feature2Module,
    Feature3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
