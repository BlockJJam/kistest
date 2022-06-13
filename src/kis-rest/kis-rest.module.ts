import { Module } from '@nestjs/common';
import { KisRestController } from './kis-rest.controller';
import { KisRestService } from './kis-rest.service';

@Module({
    imports:[],
    controllers:[KisRestController],
    providers:[KisRestService]
})
export class KisRestModule {}
