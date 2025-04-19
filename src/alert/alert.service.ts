import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AlertDto } from './alert.dto';

@Injectable()
export class AlertService {
  constructor(private readonly prisma: PrismaService) {}

  async register(dto: AlertDto) {
    return await this.prisma.alert.create({ data: dto });
  }
}
