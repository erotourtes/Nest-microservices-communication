import { Module } from '@nestjs/common';
import { GrpcModule } from 'apps/microservices/src/grpc-client/grpc.module';

@Module({
  imports: [GrpcModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
