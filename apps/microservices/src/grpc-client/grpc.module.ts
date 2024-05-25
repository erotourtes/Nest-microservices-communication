import { GRPC_PACKAGE_NAME } from '@app/common';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { GrpcProxyController } from 'apps/microservices/src/grpc-client/grpc.controller';
import { GrpcCilentService } from 'apps/microservices/src/grpc-client/grpc.service';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: GRPC_PACKAGE_NAME, // injection token
        transport: Transport.GRPC,
        options: {
          package: GRPC_PACKAGE_NAME, // proto package name, must match with the package defined in the proto file
          protoPath: join(__dirname, 'types/proto/grpc.proto'), // From `nest-cli.json` assets (inside build folder copied asset path)
        },
      },
    ]),
  ],
  controllers: [GrpcProxyController],
  providers: [GrpcCilentService],
})
export class GrpcModule {}
