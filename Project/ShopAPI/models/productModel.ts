import { Module } from '@nestjs/common';
import { ProductsService } from '../services/productService';
import { ProductsController } from '../controllers/productController';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from '../schema/productSchema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }])],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModel {}