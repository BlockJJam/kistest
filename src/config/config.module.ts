import {Module} from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports:[ConfigModule.forRoot({
        envFilePath: (process.env.NODE_ENV === 'production')? '.production.env'
        : (process.env.NODE_ENV ==='stage')? '.stage.env' : '.development.env'
      })],
    providers:[ConfigService],
    exports:[ConfigService]
})
export class CustomConfigModule{}