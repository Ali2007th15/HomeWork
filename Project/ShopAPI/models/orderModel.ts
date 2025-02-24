import { Module } from '@nestjs/common';
import { OrdersService } from '../services/orderService';
import { OrdersController } from '../controllers/orderController';

@Module({
  providers: [OrdersService],
  controllers: [OrdersController],
})
export class OrdersModel {}