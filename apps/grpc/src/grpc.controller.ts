import { Controller } from '@nestjs/common';
import { GrpcService } from './grpc.service';
import {
  GrpcRequest,
  GrpcResponse,
  GrpcServiceController,
  GrpcServiceControllerMethods,
} from '@app/common/types/proto/grpc';
import { Observable } from 'rxjs';

@Controller()
@GrpcServiceControllerMethods()
export class GrpcController implements GrpcServiceController {
  constructor(private readonly grpcService: GrpcService) {}

  /*
  Wihtout the `@GrpcServiceControllerMethods()` decorator, 
  the following methods would need to be decorated with 
  `@GrpcMethod()` and `@GrpcStreamMethod()` decorators respectively.
  Those follows the convenction of 
  `@GrpcMethod('GrpcService', 'grpcMethod')`, 
  while grpcMethod params might be ommited if they match the names of this class.
  */

  grpcMethod(
    request: GrpcRequest,
  ): GrpcResponse | Promise<GrpcResponse> | Observable<GrpcResponse> {
    return this.grpcService.grpcMethod(request.message);
  }

  grpcMethodStream(request: GrpcRequest): Observable<GrpcResponse> {
    return this.grpcService.grpcMethodStream(request.message);
  }
}
