import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './login-dto';

@Controller('auth/login')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post()
    async login( @Body() loginDto: LoginDto ): Promise<any>  {
        console.log(loginDto)
        return this.authService.login(loginDto);
    }


    


}
