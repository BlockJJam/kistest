import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config"
import { KisKeyType } from '@root/external/kis/types'


@Injectable()
export class KisKey{
    constructor(private readonly configService: ConfigService){}

    getKisKeySet(type: KisKeyType): KisKeySet{
        
        return {
            appKey: type === KisKeyType.APP? 
                this.configService.get('APPKEY') : this.configService.get('VIRTUAL_APPKEY'),
            secretKey: type === KisKeyType.APP?
                this.configService.get('SECRETKEY') : this.configService.get('VIRTUAL_SECRETKEY')
        }
    }
}

export interface KisKeySet{
    appKey: string;
    secretKey: string;
}

