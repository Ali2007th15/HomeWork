import { Module } from '@nestjs/common';
import { ProductsModel } from './products/products.model';
import { CartModel } from './cart/cart.model';
import { OrdersModel } from './orders/orders.model';
import { AuthModel } from './auth/auth.model';
import { DatabaseContext } from './config/dbContext';

@Module({
  imports: [ProductsModel, CartModel, OrdersModel, AuthModel, DatabaseContext],
})
export class AppModule {}