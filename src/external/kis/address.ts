import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { UrlType } from './url-types'

@Injectable()
export class KisAddress{

    constructor( private readonly configService: ConfigService){}

    getAPIAddressByUrl(type: UrlType): string{
        return this.configService.get('KIS_IP') + this.configService.get('KIS_PORT') + this.configService.get(type);
    }
}

@Injectable()
export class KisVirtualAddress{
    constructor( private readonly configService: ConfigService){}

    getVirtualAPIAddressByUrl(type: UrlType): string{
        return this.configService.get('KIS_VIRTURE_IP') + this.configService.get('KIS_VIRTUAL_PORT') + this.configService.get(type);
    }
}