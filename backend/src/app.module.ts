import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApplicationsModule } from './applications/applications.module';
import { PrismaModule } from '../prisma/prisma.module';
import { PropertiesModule } from './properties/properties.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ApplicationsModule,
    PrismaModule,
    PropertiesModule,
    AuthModule,
  ],
})
export class AppModule {}
