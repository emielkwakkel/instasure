import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';
import { FeaturesModule } from '../features/features.module';
import { ConversationModule } from './conversation/conversation.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ConversationModule,
  ],
  declarations: [DashboardComponent, InsuranceDetailsComponent]
})
export class PagesModule { }
