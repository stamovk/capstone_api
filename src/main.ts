import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import constantInitiate, { APP_PORT, JWT_SECRET_KEY } from './constantInitiate';
constantInitiate();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const port: any = APP_PORT || 8409;
    await app.listen(parseInt(port));
}
bootstrap();
// TODO: Delete this
// console.log(JWT_SECRET_KEY);

