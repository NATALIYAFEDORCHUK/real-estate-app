import { Module } from '@nestjs/common';
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  controllers: [PropertiesController],
  providers: [PropertiesService],
  imports: [PrismaModule],
})
export class PropertiesModule {}
