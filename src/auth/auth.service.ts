import * as dotenv from 'dotenv';
dotenv.config();
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { UserDto } from 'src/users/user-dto';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './login-dto';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private userService: UsersService){}

        async login(loginDto: LoginDto): Promise<any>{
          console.log(this.jwtService);
            const user = await this.userService.findByEmail(loginDto.email);
              
            if(user.email == loginDto.email && user.password == loginDto.password){
                return {
                  access_token: this.jwtService.sign({ sub:user.id, email:user.email,type:"User"  }, { secret: process.env.SECRET})
                };
            }
            return 'not matched...';

        } 
        
        
        async register(userDto: UserDto): Promise<User>{
          
          //    const user = new User()
          //    user.name = userDto.name;
          //    user.email = userDto.email;
          //    user.adress = userDto.adress;
          //    user.phone = userDto.phone;
             return await this.userService.create(userDto)
          }
        
          
    
}
