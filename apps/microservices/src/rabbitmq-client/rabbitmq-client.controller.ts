import { Controller, Get, Query } from '@nestjs/common';
import { RMQClientService } from './rabbitmq-client.service';
import { RMQMessage } from '@app/common';

@Controller('rmq')
export class RMQClientController {
  constructor(private readonly rmqClientService: RMQClientService) {}

  @Get()
  async getHello(@Query('msg') message: string): Promise<RMQMessage> {
    return await this.rmqClientService.getHello(message);
  }
}
