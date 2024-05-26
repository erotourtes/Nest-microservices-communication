import { AggregateRoot } from '@nestjs/cqrs';

export class MessageModel extends AggregateRoot {
  constructor(
    private readonly id: string,
    private readonly message: string,
  ) {
    super();
  }

  toObject() {
    return {
      id: this.id,
      message: this.message,
    };
  }

  get Id() {
    return this.id;
  }

  get Message() {
    return this.message;
  }
}
