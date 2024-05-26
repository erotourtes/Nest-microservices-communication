import { Injectable } from '@nestjs/common';

@Injectable()
export class RabbitmqService {
  getHello(message: string): string {
    return `Echo: ${message}`;
  }
}
