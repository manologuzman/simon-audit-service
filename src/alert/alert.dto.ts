import { IsString } from 'class-validator';

export class AlertDto {
  @IsString() type: string;
  @IsString() message: string;
  @IsString() source: string;
  @IsString() deviceId: string;
}
