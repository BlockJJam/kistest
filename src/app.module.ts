import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from '@root/app.controller';
import { AppService } from '@root/app.service';
import { ExternalModule } from '@root/external/external.module';
import { KisRestModule } from '@root/kis-rest/kis-rest.module';

@Module({
  imports: [KisRestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
