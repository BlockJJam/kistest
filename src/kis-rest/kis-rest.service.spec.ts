import { Test, TestingModule } from '@nestjs/testing';
import { KisAddress } from '@root/external/kis/address'
import { KisRestService } from './kis-rest.service';

describe('KisRestService', () => {
  let service: KisRestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[],
      providers: [KisRestService, KisAddress],
    }).compile();

    service = module.get<KisRestService>(KisRestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
