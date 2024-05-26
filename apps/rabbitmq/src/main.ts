import { NestFactory } from '@nestjs/core';
import { RabbitmqModule } from './rabbitmq.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { RMQ_QUEUE_NAME } from '@app/common/types/rabbitmq/types';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    RabbitmqModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: RMQ_QUEUE_NAME,
        queueOptions: {
          durable: false,
        },
      },
    },
  );

  await app.listen();
}
bootstrap();
