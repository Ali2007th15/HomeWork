import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { JwtStrategy } from './jwt.strategy';

@Module({
  providers: [AuthService, AuthGuard, JwtStrategy],
  exports: [AuthService],
})
export class AuthModel {}