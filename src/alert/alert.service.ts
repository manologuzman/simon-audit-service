import { Injectable } from '@nestjs/common';
import { AlertDto } from './alert.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AlertService {
  constructor(private readonly prisma: PrismaService) {}

  async register(dto: AlertDto) {
    return await this.prisma.alert.create({ data: dto });
  }
}
