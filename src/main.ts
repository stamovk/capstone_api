import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const port: any = process.env.APP_PORT || 8409;
    // console.log(port, 'abcd');
    await app.listen(parseInt(port));
}
bootstrap();

// TODO: Delete this
console.log(process.env.JWT_SECRET_KEY);
