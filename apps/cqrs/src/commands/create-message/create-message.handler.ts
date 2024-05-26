import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreateMessageCommand } from 'apps/cqrs/src/commands/create-message/create-message.command';
import { MessageFactory } from 'apps/cqrs/src/utils/message.factory';

@CommandHandler(CreateMessageCommand)
export class MessageCreateHandler
  implements ICommandHandler<CreateMessageCommand>
{
  constructor(
    private readonly factory: MessageFactory,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute(command: CreateMessageCommand) {
    const message = await this.factory.create(command.message);
    const created = this.eventPublisher.mergeObjectContext(message);
    created.commit();

    return message.toObject();
  }
}
