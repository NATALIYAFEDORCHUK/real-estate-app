import { Controller, Get } from '@nestjs/common';
import { PropertiesService } from './properties.service';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

// interface RequestWithUser extends Request {
//   user: {UseGuards, Request
//     userId: number;
//     email: string;
//   };
// }

@Controller('properties')
export class PropertiesController {
  constructor(private propertiesService: PropertiesService) {}

  @Get()
  findAll() {
    return this.propertiesService.findAll();
  }

  // @Get()
  // @UseGuards(JwtAuthGuard)
  // findAll(@Request() req: RequestWithUser) {
  //   console.log('CONTROLLER HIT');
  //   console.log('USER:', req.user);

  // return this.propertiesService.findAll();
}
