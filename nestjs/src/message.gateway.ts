import { SubscribeMessage, WebSocketGateway, MessageBody, ConnectedSocket , OnGatewayConnection, WebSocketServer} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway()
export class MessageGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  handleConnection(
    @ConnectedSocket() client: Socket
  ) {
    console.log('new user connected', client.id);
    this.server.emit('message', {content: client.id});
  }

  @SubscribeMessage('message')
  handleMessage(
    @MessageBody() data: string, 
    @ConnectedSocket() client: Socket
    ): void {
      console.log(data);
      this.server.emit('message', data);
  }
}
