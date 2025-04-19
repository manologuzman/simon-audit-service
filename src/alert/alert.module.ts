import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AlertController } from './alert.controller';
import { AlertService } from './alert.service';

@Module({
  imports: [PrismaModule],
  controllers: [AlertController],
  providers: [AlertService],
})
export class AlertModule {}
