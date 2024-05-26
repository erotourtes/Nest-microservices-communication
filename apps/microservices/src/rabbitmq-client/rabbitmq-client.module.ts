import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RMQClientService } from './rabbitmq-client.service';
import {
  RMQ_INJECTION_TOKEN,
  RMQ_QUEUE_NAME,
} from '@app/common/types/rabbitmq/types';
import { RMQClientController } from 'apps/microservices/src/rabbitmq-client/rabbitmq-client.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: RMQ_INJECTION_TOKEN,
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: RMQ_QUEUE_NAME,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [RMQClientController],
  providers: [RMQClientService],
})
export class RMQModule {}
