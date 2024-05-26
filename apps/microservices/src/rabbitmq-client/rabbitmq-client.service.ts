import {
  RMQ_INJECTION_TOKEN,
  RMQMessage,
} from '@app/common/types/rabbitmq/types';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RMQClientService {
  constructor(
    @Inject(RMQ_INJECTION_TOKEN) private readonly client: ClientProxy,
  ) {}

  async getHello(message: string): Promise<RMQMessage> {
    const res = this.client.send<RMQMessage>('hello', { message });
    return await firstValueFrom(res);
  }
}
