import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ExternalModule } from '@root/external/external.module';
import { KisRestController } from '@root/kis-rest/kis-rest.controller';
import { KisRestService } from '@root/kis-rest/kis-rest.service';

@Module({
    imports:[HttpModule.register({
        timeout: 3000,
        maxRedirects: 5
    }), ExternalModule],
    controllers:[KisRestController],
    providers:[KisRestService]
})
export class KisRestModule {}
