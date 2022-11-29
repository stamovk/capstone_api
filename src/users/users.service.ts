import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';


export type User = any;



@Injectable()
export class UsersService {

    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'changeme',
            ROLES: ['role1', 'role2', 'role3'],
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
            ROLES: ['role1'],
        },
    ];

    //

    async findOne(username) {

        const result = this.users.find((user) => {
            return user.username === username;
        });
        return result;
    }

}
