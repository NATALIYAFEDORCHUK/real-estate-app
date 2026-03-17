import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('properties')
export class PropertiesController {
  constructor(private propertiesService: PropertiesService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Request() req) {
    return this.propertiesService.findAllByUser(req.user.userId);
  }
}
