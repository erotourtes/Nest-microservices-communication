import { Module } from '@nestjs/common';
import { RMQController } from './rabbitmq.controller';
import { RabbitmqService } from './rabbitmq.service';

@Module({
  imports: [],
  controllers: [RMQController],
  providers: [RabbitmqService],
})
export class RabbitmqModule {}
