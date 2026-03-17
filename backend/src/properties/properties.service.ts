import { Injectable } from '@nestjs/common';
import { Property } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Property[]> {
    return this.prisma.property.findMany();
  }
  async findAllByUser(userId: number): Promise<Property[]> {
    return this.prisma.property.findMany({
      where: { ownerId: userId },
    });
  }
}
