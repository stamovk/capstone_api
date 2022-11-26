import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(username, password) {
        const validatedUser = await this.authService.validateUser(username, password);
        if (!validatedUser) {
            throw new UnauthorizedException('Your user that you are looking for is not in our system');
        }
        return validatedUser;
    }
}
