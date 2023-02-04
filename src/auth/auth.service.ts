import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './login-dto';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private userService: UsersService){}

        async login(loginDto: LoginDto): Promise<any>{

            const user = await this.userService.findByEmail(loginDto.email);
            
            if(user.email == loginDto.email && user.password == loginDto.passowrd){
                
                return  this.sinUser(user.id,user.email,"user");
            }
            return 'not matched...';

        }

        sinUser(userId:number,email:string,type:string){
            return this.jwtService.sign(
                {
                   sub:userId,
                   email:email,
                   type:type
                }
            );
        }
    
}
