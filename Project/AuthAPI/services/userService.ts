import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User} from '../interfaces/userInterface';
import { UserSchema } from '../schemas/userSchema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  // Получение пользователя по имени
  async getUserByName(name: string): Promise<User | null> {
    return this.userModel.findOne({ name });
  }
  // Регистрация пользователя
  async createUser(name: string, email: string, password: string, role: 'user' | 'admin' = 'user'): Promise<User> {
    // Проверяем, существует ли пользователь
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new ConflictException('Пользователь с таким email уже существует');
    }

    // Хешируем пароль перед сохранением
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создаём пользователя
    const newUser = new this.userModel({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return newUser.save();
  }

  // Получение всех пользователей (только для админа)
  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().select('-password'); // Не передаём пароли
  }

  // Получение пользователя по ID
  async getUserById(userId: string): Promise<User> {
    const user = await this.userModel.findById(userId).select('-password');
    if (!user) {
      throw new NotFoundException('Пользователь не найден');
    }
    return user;
  }

  // Получение пользователя по email (вспомогательная функция для AuthService)
  async getUserByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email });
  }

  // Обновление профиля пользователя
  async updateUser(userId: string, updateData: Partial<User>): Promise<User> {
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const updatedUser = await this.userModel.findByIdAndUpdate(userId, updateData, { new: true }).select('-password');
    if (!updatedUser) {
      throw new NotFoundException('Пользователь не найден');
    }

    return updatedUser;
  }

  // Удаление пользователя (только админ)
  async deleteUser(userId: string): Promise<{ message: string }> {
    const deletedUser = await this.userModel.findByIdAndDelete(userId);
    if (!deletedUser) {
      throw new NotFoundException('Пользователь не найден');
    }
    return { message: 'Пользователь успешно удалён' };
  }
}
