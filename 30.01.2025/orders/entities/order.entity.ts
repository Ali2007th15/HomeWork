import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];

  @Column()
  total: number;

  @Column({ default: 'pending' })
  status: string;
}