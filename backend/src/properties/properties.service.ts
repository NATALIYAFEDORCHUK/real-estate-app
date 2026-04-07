import { Injectable } from '@nestjs/common';
import { Property } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const data = await this.prisma.property.findMany();
    console.log('PROPERTIES FROM DB:', data);
    return data;
  }
  async findAllByUser(userId: number): Promise<Property[]> {
    return this.prisma.property.findMany({
      where: { ownerId: userId },
    });
  }
}
