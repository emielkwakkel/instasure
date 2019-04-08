import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ConversationComponent } from './conversation.component';
import { ConversationService } from './conversation.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ConversationComponent,
  ],
  providers: [
    ConversationService,
  ],
  declarations: [
    ConversationComponent,
  ]
})
export class ConversationModule { }
