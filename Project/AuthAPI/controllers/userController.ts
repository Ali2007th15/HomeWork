import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from '../services/userService';
import { UsersModel } from '../models/userModel';





@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Post()
  createUser(@Body() user: UsersModel) {
    return this.userService.createUser
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}