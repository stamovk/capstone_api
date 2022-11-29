import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('custom') {
    constructor() {
        super();
    }

    canActivate(context: ExecutionContext) {
        return super.canActivate(context);
    }

}
