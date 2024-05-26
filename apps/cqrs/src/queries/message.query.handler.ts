import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { MessageQuery } from 'apps/cqrs/src/queries/message.query';
import { MessageRepository } from 'apps/cqrs/src/utils/message.repository';

@QueryHandler(MessageQuery)
export class MessageQueryHandler implements IQueryHandler<MessageQuery> {
  /*
        In theory, the repository should be the other class, because 
        cqrs is a pattern that separates the read and write operations.
    */
  constructor(private readonly repository: MessageRepository) {}

  async execute(query: MessageQuery) {
    return await this.repository.findById(+query.id);
  }
}
