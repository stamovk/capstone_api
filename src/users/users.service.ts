import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { MongodbService } from 'src/mongodb/mongodb.service';


export type User = any;



@Injectable()
export class UsersService {

    constructor(
        private mongodbService: MongodbService,
    ) { }


    async findOne(username) {

        // const result = this.users.find((user) => {
        //     return user.username === username;
        // });
        const result = await this.findUserByUsername(username);
        return result;
    }


    async findUserByUsername(username) {
        const result = await this.mongodbService.usersCol.findOne({
            username
        });
        return result;
    }

}
