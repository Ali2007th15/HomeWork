import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'rufat2007',
      database: 'project',
      autoLoadEntities: true,
      synchronize: true, 
    }),
    AuthModule,
    ProductsModule,
    CartModule,
    OrdersModule,
  ],
})
export class AppModule {}