import { Injectable } from '@nestjs/common';
import { Property } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Property[]> {
    return this.prisma.property.findMany();
  }
}
