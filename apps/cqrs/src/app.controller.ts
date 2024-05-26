import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Query,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateMessageCommand } from 'apps/cqrs/src/commands/create-message/create-message.command';
import { MessageQuery } from 'apps/cqrs/src/queries/message.query';
import { MessageModel } from 'apps/cqrs/src/utils/message.model';

@Controller('cqrs')
export class AppController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  cqrs(@Query('msg') message: string) {
    return this.commandBus.execute<CreateMessageCommand, void>(
      new CreateMessageCommand(message),
    );
  }

  @Get(':msg')
  cqrsGet(@Param('msg') msgId: string) {
    if (!msgId) throw new BadRequestException('Invalid message ID');
    return this.queryBus.execute<MessageQuery, MessageModel>(
      new MessageQuery(msgId),
    );
  }
}
