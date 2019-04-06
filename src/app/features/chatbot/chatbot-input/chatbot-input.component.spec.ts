import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbotInputComponent } from './chatbot-input.component';

describe('ChatbotInputComponent', () => {
  let component: ChatbotInputComponent;
  let fixture: ComponentFixture<ChatbotInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbotInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbotInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
