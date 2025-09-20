import { Request } from 'express';
import {
  BodyDto,
  Get,
  Middleware,
  Post,
  QueryDto,
  ResponseDto,
  Route,
  Typecast,
} from '@fcjs/core';

import { UserService } from './services/user.service.js';
import {
  createUserDto,
  getAllUsersQueryDto,
  getAllUsersResponseDto,
  getUserDto,
} from './data-transfer-objects/user.dto.js';
import { authMiddleware } from '../../middlewares/auth.middleware.js';

@Route('/user')
export default class UserController {
  private userService = new UserService();

  @Get('/getAll')
  @ResponseDto(getAllUsersResponseDto)
  @QueryDto(getAllUsersQueryDto)
  public async getAllUsers(req: Request) {
    const { limit, offset } = new Typecast(req.query).to(getAllUsersQueryDto);
    return this.userService.getAllUsers(limit, offset);
  }

  @Post('/')
  @ResponseDto(createUserDto)
  @BodyDto(createUserDto)
  public async createUser(req: Request) {
    const user = await this.userService.createUser(req.body);
    return user;
  }

  @Get('/:id')
  @Middleware(authMiddleware)
  @ResponseDto(getUserDto)
  public async getUserById(req: Request) {
    const user = await this.userService.getUserById(+req.params.id);
    return user;
  }
}
