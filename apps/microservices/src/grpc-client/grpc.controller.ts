import { Controller, Get, Query } from '@nestjs/common';
import { GrpcCilentService } from 'apps/microservices/src/grpc-client/grpc.service';

@Controller('grpc')
export class GrpcProxyController {
  constructor(private readonly grpcService: GrpcCilentService) {}

  @Get()
  grpcMethod(
    @Query('message') message: string,
  ): ReturnType<GrpcCilentService['grpcMethod']> {
    return this.grpcService.grpcMethod(message);
  }

  @Get('stream')
  grpcMethodStream(
    @Query('message') message: string,
  ): ReturnType<GrpcCilentService['grpcMethodStream']> {
    return this.grpcService.grpcMethodStream(message);
  }
}
