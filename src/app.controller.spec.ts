import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

describe('NestEnv',() =>{
  let configService :ConfigService;

  beforeEach(async ()=>{
    const app: TestingModule = await Test.createTestingModule({
      imports : [ConfigModule.forRoot({
        envFilePath: (process.env.NODE_ENV === 'production') ? '.production.env'
          : (process.env.NODE_ENV === 'stage') ? '.stage.env' : '.development.env'
      })],
      providers : [ConfigService]
    }).compile();
    configService = app.get<ConfigService>(ConfigService);
  });

  it('환경변수에 등록된 NODE_ENV를 토대로 해당 XXX.env파일을 잘 읽어오는가?', ()=>{
    //TODO 제대로 값을 채우면 그 값으로 테스트 다시 진행 필요
    expect(configService.get('HASHKEY_URL')).toBe('/uapi/hashkey');
  })
})