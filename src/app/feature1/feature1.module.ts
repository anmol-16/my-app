import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cmp1Component } from '../cmp1/cmp1.component';
import { Cmp2Component } from '../cmp2/cmp2.component';
@NgModule({
  declarations: [
    Cmp1Component,
    Cmp2Component
  ],
  imports: [
    CommonModule
  ]
})
export class Feature1Module { }
