import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AlertDto {
  @ApiProperty({ example: 'routing-error', description: 'Tipo de alerta' })
  @IsString()
  type: string;

  @ApiProperty({
    example: 'Timeout al calcular ruta',
    description: 'Mensaje de alerta',
  })
  @IsString()
  message: string;

  @ApiProperty({
    example: 'routing-service',
    description: 'Servicio que generó la alerta',
  })
  @IsString()
  source: string;
  @ApiProperty({ example: 'JJJ-255', description: 'ID del dispositivo' })
  @IsString()
  deviceId: string;
}
