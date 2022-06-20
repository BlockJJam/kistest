import { Test, TestingModule } from '@nestjs/testing';
import { ExternalModule } from '@root/external/external.module';
import { KisAddress } from '@root/external/kis/address'
import { KisRestService } from '@root/kis-rest/kis-rest.service';
import { HttpModule} from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { response } from 'express';

describe('KisRestService', () => {
  let service: KisRestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[HttpModule.register({
        timeout: 3000,
        maxRedirects: 5
    }),ExternalModule],
      providers: [KisRestService],
    }).compile();

    service = module.get<KisRestService>(KisRestService);
  });

  it('should be defined',() => {
    expect(service).toBeDefined();
  });

  it('KIS API에서 Hashkey 호출', (done) =>{
    try{
      const result:Observable<AxiosResponse<any>> = service.getHashKey();
      result.subscribe((response)=>{
        console.log(response.data);
        expect(response.data).toBeDefined();
        done();
      })
    }catch(e){
      console.log(e)
    }
    // var result:Observable<AxiosResponse<any>> = service.getHashKey()
    // result.subscribe(async (response)=>{
    //   await console.log('test');
    //   expect(response.data).toBeDefined();
    // });    
  },3000)
});
