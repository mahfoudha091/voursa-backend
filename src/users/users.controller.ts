import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDto } from './user-dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}
    @Post()
    create(@Body() userDto: UserDto): Promise<User>  {
      return this.userService.create(userDto);
    }
  
    @Get()
    findAll(): Promise<User[]>{
      return this.userService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number): Promise<User> {
  
      return this.userService.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id') id: number, @Body() userDto: UserDto): Promise<void> {
  
      return this.userService.update(id,userDto);
    
    }
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.userService.remove(id);
    
  }
  
  
  }
  