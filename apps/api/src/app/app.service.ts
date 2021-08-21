import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  async getProducts() {
    const data = await this.amqpConnection.request({
      exchange: 'exchange1',
      routingKey: 'subscribe.route',
      payload: { cmd: 'PRODUCT' },
    });
    return data;
  }
}
