import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceService } from './insurance.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    InsuranceService
  ],
  exports: [
  ],
  declarations: []
})
export class SharedModule { }
