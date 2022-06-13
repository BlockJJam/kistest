import { Test, TestingModule } from '@nestjs/testing';
import { KisRestController } from './kis-rest.controller';

describe('KisRestController', () => {
  let controller: KisRestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KisRestController],
    }).compile();

    controller = module.get<KisRestController>(KisRestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
