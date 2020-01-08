import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageGateway } from './message.gateway';
import { TestGateway } from './test.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MessageGateway, TestGateway],
})
export class AppModule {}
