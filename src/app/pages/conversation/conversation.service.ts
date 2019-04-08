import { Injectable } from '@angular/core';
import { ApiAiClient } from 'api-ai-javascript';
import { Message } from './conversation.model';

@Injectable()
export class ConversationService {
  private client: ApiAiClient;
  public conversation: Message[] = [];
  public params: Object = {};

  constructor() {
    this.client = new ApiAiClient({
      accessToken: '18aef205a96b4ba1bbd6294f4dba5371'
    });
  }

  textRequest(input: string): Promise<Object> {
    this.conversation.push({
      message: input,
      type: 'input'
    });

    return this.client
      .textRequest(input)
      .then(response => {
        this.setParameters(response.result);
        return this.conversation.push({
          message: response.result.fulfillment.speech,
          type: 'output'
        })
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }

  private setParameters(input: any) {
    console.log(input.parameters);
    if (Object.keys(input.parameters).length > 0 && input.parameters.constructor === Object) {
      this.params = input.parameters
    }
  }

}
