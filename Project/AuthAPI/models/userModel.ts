import { Module } from '@nestjs/common';
import { UsersService } from '../services/userService';
import { UserController } from '../controllers/userController';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../schemas/userSchema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [UsersService],
  controllers: [UserController],
  exports: [UsersService],
})
export class UsersModel {}
