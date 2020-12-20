import { Controller, Post, Body } from '@nestjs/common';
import { outbox } from 'src/entities/outbox.entity';
import { SmsService } from 'src/services/sms.service';

@Controller('send')
export class SendController {
    constructor(
        private smsService: SmsService
        ) { }


        @Post()
        getOne(@Body() sms:outbox): any {
            return this.smsService.sendSms(sms);
        }
}
