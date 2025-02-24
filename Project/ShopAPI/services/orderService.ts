import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  private orders = [];

  getOrders() {
    return this.orders;
  }

  placeOrder(order) {
    this.orders.push(order);
    return order;
  }
}