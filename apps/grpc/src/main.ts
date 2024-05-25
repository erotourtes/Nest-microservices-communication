import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { GRPC_PACKAGE_NAME } from '@app/common/types/proto/grpc';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: GRPC_PACKAGE_NAME,
      protoPath: join(__dirname, 'types/proto/grpc.proto'),
    },
  });
  await app.listen();
}
bootstrap();
