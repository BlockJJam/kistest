import { ConfigModule, ConfigService } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import { KisAddress } from "./address";
import { UrlType } from "./url-types";

describe("Kis Env Test",()=>{
    let kisAddress :KisAddress;

    beforeEach(async ()=>{
        const app: TestingModule = await Test.createTestingModule({
            imports : [ConfigModule.forRoot({
            envFilePath: (process.env.NODE_ENV === 'production') ? '.production.env'
                : (process.env.NODE_ENV === 'stage') ? '.stage.env' : '.development.env'
            })],
            providers : [ConfigService, KisAddress]
        }).compile();
        kisAddress = app.get<KisAddress>(KisAddress);
    });

    it('.development.env의 환경변수가 제대로 들어가고, kisAddress가 DI가 제대로 되어 KIS의 API 주소를 잘 가져오는 지 확인',()=>{
        expect(kisAddress.getAPIAddressByUrl(UrlType.HASHKEY)).toBe("https://openapi.koreainvestment.com:9443/uapi/hashkey")
    })
})