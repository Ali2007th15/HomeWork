import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from '../services/productService';
import { Product } from '../interfaces/productsInterface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll() {
    return this.productsService.getAll();
  }

  @Post()
  create(@Body() product: Product) {
    return this.productsService.create(product);
  }
}