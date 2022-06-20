import { Controller } from '@nestjs/common';
import { KisRestService } from '@root/kis-rest/kis-rest.service';

@Controller('kis-rest')
export class KisRestController {
    constructor(private readonly kisRestService: KisRestService){}
    
}
