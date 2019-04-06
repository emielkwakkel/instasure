import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotModule } from './chatbot/chatbot.module';
import { StatusModule } from './status/status.module';

@NgModule({
  imports: [
    CommonModule,
    ChatbotModule,
    StatusModule
  ],
  declarations: []
})
export class FeaturesModule { }
