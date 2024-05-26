import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { MessageCreatedEvent } from 'apps/cqrs/src/events/message-created.event';
import { MessageRepository } from 'apps/cqrs/src/utils/message.repository';

@EventsHandler(MessageCreatedEvent)
export class MessageCreatedEventHandler
  implements IEventHandler<MessageCreatedEvent>
{
  constructor(private readonly messageRepository: MessageRepository) {}

  async handle(event: MessageCreatedEvent) {
    const message = await this.messageRepository.findById(+event.id);
    console.log(
      `Message Created Event handled: ${event.id} - ${message.Message}`,
    );
  }
}
