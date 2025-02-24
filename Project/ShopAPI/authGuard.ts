import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthService } from '../ShopApi/services/authService';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) return false;

    const user = this.authService.validateToken(token);
    if (!user) return false;

    request.user = user;
    return true;
  }
}