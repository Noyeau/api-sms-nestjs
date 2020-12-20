import { Controller, Get, Post, Body } from '@nestjs/common';
import { SmsService } from 'src/services/sms.service';
import { ApiBody } from '@nestjs/swagger';
import { outbox } from 'src/entities/outbox.entity';

@Controller('outbox')
export class OutboxController {


    constructor(
        private smsService: SmsService
        ) { }

        @Get()
        getAll(): any {
            return this.smsService.getOutboxAll();
        }

        @Post()
        getOne(@Body() sms:outbox): any {
            return this.smsService.sendSms(sms);
        }



}
