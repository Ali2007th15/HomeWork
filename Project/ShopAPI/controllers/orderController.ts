import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrdersService } from '../services/orderService';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  getOrders() {
    return this.ordersService.getOrders();
  }

  @Post()
  placeOrder(@Body() order) {
    return this.ordersService.placeOrder(order);
  }
}