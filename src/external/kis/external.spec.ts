import { ConfigModule, ConfigService } from "@nestjs/config";
import { Test, TestingModule } from "@nestjs/testing";
import { KisAddress } from "@root/external/kis/address";
import { KisKey, KisKeySet} from "@root/external/kis/appkey"
import { UrlType, KisKeyType } from "@root/external/kis/types";

describe("Kis External Test",()=>{
    let kisAddress :KisAddress;
    let kisKey: KisKey;

    beforeEach(async ()=>{
        const app: TestingModule = await Test.createTestingModule({
            imports : [ConfigModule.forRoot({
            envFilePath: (process.env.NODE_ENV === 'production') ? '.production.env'
                : (process.env.NODE_ENV === 'stage') ? '.stage.env' : '.development.env'
            })],
            providers : [ConfigService, KisAddress, KisKey]
        }).compile();

        kisAddress = app.get<KisAddress>(KisAddress);
        kisKey = app.get<KisKey>(KisKey);
    });

    it('.development.env의 환경변수가 제대로 들어가고, kisAddress가 DI가 제대로 되어 KIS의 API 주소를 잘 가져오는 지 확인',()=>{
        expect(kisAddress.getAPIAddressByUrl(UrlType.HASHKEY)).toBe("https://openapi.koreainvestment.com:9443/uapi/hashkey")
    })

    it('.env파일에서 KisKeySet정보 조회',()=>{
        expect(kisKey.getKisKeySet(KisKeyType.VIRTUAL)).toStrictEqual({appKey:'PS6CscEq1d10XrDcIIfxSMsq1g25SEFh1Far',secretKey:'P4R8zN5rQFGdnNoTp8YVqmBTJDHHxs1cA/sXHj5ykQKRIWYl1GYy9Oi0AAIvzpjkVcYkvDmAQgYs7s0cjKQyJcf+r/w9PjNmAr2VC+d6nsmsMl55uZ+9HxIi2JYe68F9sFGsFbw069nmr5OnUjzIC+7yHfEhwlH5eKwloFgTDfHpRBocWzA='})
    })
})