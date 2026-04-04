// import * as dotenv from 'dotenv';
// dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  const allowedOrigins =
    process.env.FRONTEND_ORIGINS || 'http://localhost:5173';

  app.enableCors({
    origin: allowedOrigins,
    // [
    //   'http://localhost:5173',
    //   'https://real-estate-app-f6wy-git-main-nataliiafedorchuks-projects.vercel.app',
    //   'https://real-estate-app-0c4x.onrender.com',
    // ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  const port = process.env.PORT ?? 3000;
  await app.listen(port, '0.0.0.0');
  console.log('DATABASE_URL:', process.env.DATABASE_URL);
}
void bootstrap();
