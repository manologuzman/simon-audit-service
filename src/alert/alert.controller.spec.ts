import { Test, TestingModule } from '@nestjs/testing';
import { AlertController } from './alert.controller';
import { AlertService } from './alert.service';
import { PrismaService } from '../prisma/prisma.service';

const mockPrismaService = {
  alert: {
    create: jest.fn().mockResolvedValue({ id: 1, message: 'Alert registered' }),
  },
};

describe('AlertController', () => {
  let controller: AlertController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlertController],
      providers: [
        AlertService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    controller = module.get<AlertController>(AlertController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should register alert', async () => {
    const dto = {
      type: 'routing-error',
      message: 'Timeout al calcular ruta',
      source: 'routing-service',
      deviceId: 'JJW-322',
    };

    const result = await controller.register(dto);
    expect(result.message).toContain('Alert registered');
    expect(mockPrismaService.alert.create).toHaveBeenCalled();
  });
});
