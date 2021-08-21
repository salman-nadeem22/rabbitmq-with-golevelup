import { RabbitRPC, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

interface Product {
  name: string;
}

@Injectable()
export class AppService {
  @RabbitRPC({
    exchange: 'exchange1',
    routingKey: 'subscribe.route',
  })
  getProducts(payload): Product[] {
    console.log('aasd', payload);

    return [{ name: 'Samsung' }, { name: 'Car' }];
  }
}
