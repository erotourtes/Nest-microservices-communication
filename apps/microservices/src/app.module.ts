import { Module } from '@nestjs/common';
import { GrpcModule } from 'apps/microservices/src/grpc-client/grpc.module';
import { RMQModule } from './rabbitmq-client/rabbitmq-client.module';

@Module({
  imports: [GrpcModule, RMQModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
