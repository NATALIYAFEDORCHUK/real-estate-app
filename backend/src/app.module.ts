import { Module } from '@nestjs/common';
import { ApplicationsModule } from './applications/applications.module';
import { PrismaModule } from '../prisma/prisma.module';
import { PropertiesModule } from './properties/properties.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ApplicationsModule, PrismaModule, PropertiesModule, AuthModule],
})
export class AppModule {}
