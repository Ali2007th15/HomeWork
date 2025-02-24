import { Module } from '@nestjs/common';
import { AuthModel } from './models/authModel';
import { UsersModel } from './models/userModel';

@Module({
  imports: [AuthModel, UsersModel ],
})
export class AppModule {}
