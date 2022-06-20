import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { KisAddress, KisVirtualAddress } from '@root/external/kis/address';
import { KisKey } from '@root/external/kis/appkey';
import { KisKeyType, UrlType} from '@root/external/kis/types'
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class KisRestService {
    private readonly logger = new Logger(KisRestService.name);

    constructor(
        private readonly http: HttpService,
        private readonly kisAddress: KisAddress,
        private readonly kisVirtualAddress: KisVirtualAddress,
        private readonly kisKey:KisKey
    ){}

    getHashKey(): Observable<AxiosResponse<any>>{
        var data:object ={
            'CANO':"50067192"
        };

        var {appKey, secretKey} = this.kisKey.getKisKeySet(KisKeyType.VIRTUAL);
        
        // TODO: KIS에서 필요한 헤더 정보를 간편하게 가져올 방식 구현 필요
        var headerReq = {
            'content-type' : 'application/json; charset=utf-8',
            'appkey' : appKey,
            'appSecret' : secretKey
        }
        var result: Observable<AxiosResponse<any>> = this.http.post(this.kisVirtualAddress.getVirtualAPIAddressByUrl(UrlType.HASHKEY), data, {headers: headerReq})
        
        return result;
    }
}
