import { WsMessage, WsRoute } from '@fcjs/core';

@WsRoute('/chat')
export default class ChatWsController {
  @WsMessage('ping')
  handlePing(_data: unknown) {
    return { event: 'pong', data: {} };
  }

  @WsMessage('message')
  handleMessage(data: { text: string }) {
    return {
      event: 'message',
      data: { text: `Echo: ${data.text}` },
    };
  }
}
