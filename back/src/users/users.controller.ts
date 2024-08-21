import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/createUser.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(){
    return this.usersService.getUsers();
  }


  @Get(':id')
  getUser(
    @Param('id', ParseIntPipe) id: number){
      return this.usersService.getUser(id);
  }


  @Post()
  createUser(@Body() user: createUserDto){
    return this.usersService.createUser(user);
  }
}
