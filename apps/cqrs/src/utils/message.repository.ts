import { Injectable } from '@nestjs/common';
import { MessageModel } from 'apps/cqrs/src/utils/message.model';

const data: Record<number, { message: string; id: number }> = {};
let id = 0;

@Injectable()
export class MessageRepository {
  constructor() {}

  async create(message: string) {
    const record = { message, id };
    data[id++] = record;

    return new MessageModel(record.id.toString(), record.message);
  }

  async findById(id: number) {
    const record = data[id];
    if (!record) return null;
    return new MessageModel(record.id.toString(), record.message);
  }
}
