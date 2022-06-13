import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KisAddress } from './external/kis/address';
import { KisRestModule } from './kis-rest/kis-rest.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: (process.env.NODE_ENV === 'production')? '.production.env'
    : (process.env.NODE_ENV ==='stage')? '.stage.env' : '.development.env'
  }),
    KisRestModule],
  controllers: [AppController],
  providers: [AppService, ConfigService, KisAddress],
})
export class AppModule {}
