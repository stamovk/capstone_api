import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

@Controller('users')
export class UsersController {

    constructor(
        private authService: AuthService
    ) { }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }


    @UseGuards(JwtAuthGuard)
    @Post('/validateToken')
    async validateToken(@Request() req) {
        return {
            message: 'OK'
        };
    }


    @UseGuards(JwtAuthGuard)
    @Get('/test')
    getProfile(@Request() req) {
        return req.user;
    }
}
