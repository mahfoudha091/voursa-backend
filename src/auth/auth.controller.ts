import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './login-dto';

@Controller('auth/login')
export class AuthController {

    constructor(private authService: AuthService){}
    @Post()
    async login(@Request() req) {
        return this.authService.login(req.body);
      }

    
    // @Post()
    // async login( @Body() loginDto: LoginDto ): Promise<any>  {
    //     return this.authService.login(loginDto);
    // }


    


}
