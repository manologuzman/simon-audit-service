import { Controller, Post, Body } from '@nestjs/common';
import { AlertService } from './alert.service';
import { AlertDto } from './alert.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('alert')
export class AlertController {
  constructor(private readonly alertService: AlertService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar una alerta' })
  @ApiResponse({ status: 201, description: 'Alerta creada correctamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  async register(@Body() dto: AlertDto) {
    return await this.alertService.register(dto);
  }
}
