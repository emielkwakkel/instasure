import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from './conversation.model';
import { ConversationService } from './conversation.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  public formGroup: FormGroup;
  public conversation: Message[];

  constructor(private fb: FormBuilder, private conversationService: ConversationService) {
    this.conversation = this.conversationService.conversation;
  }
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      chatInput: [ '', Validators.required ],
    });
  }

  onSubmit() {
    const input = this.formGroup.value.chatInput;
    this.formGroup.reset();
    return this.conversationService.textRequest(input);
  }
}
