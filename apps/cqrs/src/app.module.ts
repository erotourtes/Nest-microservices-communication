import { Module, Query } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppController } from 'apps/cqrs/src/app.controller';
import { EventHandlers } from 'apps/cqrs/src/events';
import { CommandHandlers } from 'apps/cqrs/src/commands';
import { MessageFactory } from 'apps/cqrs/src/utils/message.factory';
import { MessageRepository } from 'apps/cqrs/src/utils/message.repository';
import { QueryHandlers } from 'apps/cqrs/src/queries';

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [
    MessageRepository,
    MessageFactory,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
  ],
})
export class AppModule {}
