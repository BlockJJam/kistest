import {Module} from '@nestjs/common'
import { CustomConfigModule } from '@root/config/config.module'
import {KisAddress, KisVirtualAddress} from '@root/external/kis/address'
import {KisKey} from '@root/external/kis/appkey'
@Module({
    imports:[CustomConfigModule],
    providers:[KisAddress, KisVirtualAddress, KisKey],
    exports:[KisAddress, KisVirtualAddress, KisKey]
})
export class ExternalModule{}