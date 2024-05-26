import { Injectable } from '@nestjs/common';
import { MessageCreatedEvent } from 'apps/cqrs/src/events/message-created.event';
import { MessageRepository } from 'apps/cqrs/src/utils/message.repository';

@Injectable()
export class MessageFactory {
  constructor(private readonly repository: MessageRepository) {}

  async create(message: string) {
    const messageModel = await this.repository.create(message);
    messageModel.apply(new MessageCreatedEvent(messageModel.Id.toString()));

    return messageModel;
  }
}
