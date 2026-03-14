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
  app.enableCors({
    origin: ['https://real-estate-app-sable-two.vercel.app'], // Allow requests from this origin
    credentials: true, // Allow cookies to be sent with requests
  });
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
