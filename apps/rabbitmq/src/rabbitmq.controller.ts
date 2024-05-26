import { Controller } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RMQMessage } from '@app/common';

@Controller()
export class RMQController {
  constructor(private readonly rmqService: RabbitmqService) {}

  @MessagePattern('hello')
  getHello(@Payload() data: RMQMessage): RMQMessage {
    return {
      message: this.rmqService.getHello(data.message),
    };
  }
}
