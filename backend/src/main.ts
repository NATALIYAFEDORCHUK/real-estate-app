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
    origin: [
      'http://localhost:5173',
      'https://real-estate-app-sable-two.vercel.app',
      'htpps://real-estate-app-f6wy-git-main-nataliiafedorchuks-projects.vercel.app',
      'https://real-estate-app-f6wy-a92i1wbkh-nataliiafedorchuks-projects.vercel.app',
    ],
    credentials: true,
  });
  // await app.listen(process.env.PORT ?? 3000);
  const port = process.env.PORT ?? 3000;
  await app.listen(port, '0.0.0.0');
}
void bootstrap();
