import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ApplicationsService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateApplicationDto, userId: number) {
    return this.prisma.application.create({
      data: {
        ...data,
        userId,
      },
    });
  }

  findAll() {
    return this.prisma.application.findMany();
  }
}
