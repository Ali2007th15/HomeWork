import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { Cart } from '../cart/entities/cart.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
  ) {}

  async createOrder(userId: number): Promise<Order> {
    const cartItems = await this.cartRepository.find({ where: { userId }, relations: ['product'] });
    if (!cartItems.length) throw new Error('Cart is empty');

    const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const products = cartItems.map((item) => item.product);

    const order = this.orderRepository.create({
      userId,
      products,
      total,
    });
    await this.orderRepository.save(order);
    await this.cartRepository.delete({ userId }); 
    return order;
  }
}