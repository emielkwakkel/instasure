import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [DashboardComponent, InsuranceDetailsComponent]
})
export class PagesModule { }
