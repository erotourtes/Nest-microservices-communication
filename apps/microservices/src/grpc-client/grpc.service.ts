import {
  GRPC_PACKAGE_NAME,
  GRPC_SERVICE_NAME,
  GrpcServiceClient,
} from '@app/common';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

/*
This service acts like a proxy to the gRPC service.
*/
@Injectable()
export class GrpcCilentService implements OnModuleInit {
  private grpcService: GrpcServiceClient;

  constructor(@Inject(GRPC_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.grpcService =
      this.client.getService<GrpcServiceClient>(GRPC_SERVICE_NAME);
  }

  grpcMethod(message: string) {
    return this.grpcService.grpcMethod({
      message,
      meta: ['from grcp.service', 'meta'],
    });
  }

  grpcMethodStream(message: string) {
    return this.grpcService.grpcMethodStream({
      message,
      meta: ['from grcp.service', 'meta'],
    });
  }
}
