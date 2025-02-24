import { Module } from '@nestjs/common';
import { AuthService } from '../services/authService';
import { AuthController } from '../controllers/authController';
import { JwtStrategy } from '../../jwtStrategy';
import { UsersModel } from '../models/userModel';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from '../../config/jwt';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60m' },
    }),
    UsersModel,
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModel {}