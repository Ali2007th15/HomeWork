import { Module } from '@nestjs/common';
import { AuthService } from '../services/authService';
import { AuthGuard } from '../authGuard';
import { JwtStrategy } from '../../jwtStrategy';

@Module({
  providers: [AuthService, AuthGuard, JwtStrategy],
  exports: [AuthService],
})
export class AuthModel {}