import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserDto } from './user-dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() userDto: UserDto): Promise<User>  {
      return this.userService.create(userDto);
    }
  
    @UseGuards(JwtAuthGuard)
    @Get()
    findAll(): Promise<User[]>{
      return this.userService.findAll();
    }
  
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: number): Promise<User> {
  
      return this.userService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':email')
    findByEmail(@Param('email') email: string): Promise<User> {
  
      return this.userService.findByEmail(email);
    }
  
    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id') id: number, @Body() userDto: UserDto): Promise<void> {
  
      return this.userService.update(id,userDto);
    
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.userService.remove(id);
    
  }
  
  
  }
  