import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { Product } from '../products/entities/product.entity';
import { AddToCartDto } from './dto/add-to-cart.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async addToCart(addToCartDto: AddToCartDto, userId: number): Promise<Cart> {
    const { productId, quantity } = addToCartDto;
    const product = await this.productRepository.findOne({ where: { id: productId } });
    if (!product) throw new NotFoundException('Product not found');

    const cartItem = this.cartRepository.create({
      userId,
      product,
      quantity,
    });
    return this.cartRepository.save(cartItem);
  }

  async getCart(userId: number): Promise<Cart[]> {
    return this.cartRepository.find({ where: { userId }, relations: ['product'] });
  }
}