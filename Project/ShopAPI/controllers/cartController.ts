import { Controller, Get, Post, Body } from '@nestjs/common';
import { CartService } from '../services/cartService';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  getCart() {
    return this.cartService.getCart();
  }

  @Post()
  addToCart(@Body() product) {
    return this.cartService.addToCart(product);
  }
}