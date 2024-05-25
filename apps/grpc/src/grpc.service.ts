import { GrpcResponse } from '@app/common/types/proto/grpc';
import { Injectable } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class GrpcService {
  grpcMethod(message: string): GrpcResponse {
    return {
      message: `Echo ${message}`,
    };
  }

  grpcMethodStream(message: string): Observable<GrpcResponse> {
    const subject$ = new Subject<GrpcResponse>();

    setTimeout(() => {
      subject$.next({
        message: `Echo ${message} - 1`,
      });
    }, 1000);

    setTimeout(() => {
      subject$.next({
        message: `Echo ${message} - 2`,
      });
      subject$.complete();
    }, 2000);

    return subject$;
  }
}
