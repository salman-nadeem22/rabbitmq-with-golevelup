import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getProducts() {
    return this.appService.getProducts();
  }
}
