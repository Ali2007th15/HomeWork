import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService {
  private cart = [];

  getCart() {
    return this.cart;
  }

  addToCart(product) {
    this.cart.push(product);
    return this.cart;
  }
}