import { Module } from '@nestjs/common';
import { ProductsModel } from './models/productModel';
import { OrdersModel } from './models/orderModel';
import { AuthModel } from './models/authModel';


@Module({
  imports: [ProductsModel, OrdersModel, AuthModel],
})
export class AppModule {}