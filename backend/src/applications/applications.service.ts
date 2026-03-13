import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateApplicationDto } from './dto/create-application.dto';

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
