import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('applications')
export class ApplicationsController {
  constructor(private readonly service: ApplicationsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() dto: CreateApplicationDto,
    @Req() req: Request & { user: { userId: number; email: string } },
  ) {
    const userId = req.user.userId;

    return this.service.create(dto, userId);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
