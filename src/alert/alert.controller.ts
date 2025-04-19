import { Controller, Post, Body } from '@nestjs/common';
import { AlertService } from './alert.service';
import { AlertDto } from './alert.dto';

@Controller('alert')
export class AlertController {
  constructor(private readonly alertService: AlertService) {}

  @Post()
  async register(@Body() dto: AlertDto) {
    return await this.alertService.register(dto);
  }
}
