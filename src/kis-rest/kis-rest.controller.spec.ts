import { Test, TestingModule } from '@nestjs/testing';
import { KisRestController } from '@root/kis-rest/kis-rest.controller';
import { KisRestService } from '@root/kis-rest/kis-rest.service';
import { HttpModule} from '@nestjs/axios';
import { ExternalModule } from '@root/external/external.module';

describe('KisRestController', () => {
  let controller: KisRestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[HttpModule.register({
        timeout: 3000,
        maxRedirects: 5
    }),ExternalModule],
      controllers: [KisRestController],
      providers: [KisRestService]
    }).compile();

    controller = module.get<KisRestController>(KisRestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
