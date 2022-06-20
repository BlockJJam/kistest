import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { UrlType } from '@root/external/kis/types'

@Injectable()
export class KisAddress{

    constructor( private readonly configService: ConfigService){}

    getAPIAddressByUrl(type: UrlType): string{
        return this.configService.get('KIS_IP') + this.configService.get('KIS_PORT') + type;
    }
}

@Injectable()
export class KisVirtualAddress{
    constructor( private readonly configService: ConfigService){}

    getVirtualAPIAddressByUrl(type: UrlType): string{
        return this.configService.get('KIS_VIRTUAL_IP') + this.configService.get('KIS_VIRTUAL_PORT') + type;
    }
}