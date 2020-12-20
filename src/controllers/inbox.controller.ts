import { Controller, UseGuards, Get, Param } from '@nestjs/common';
import { SmsService } from 'src/services/sms.service';
import { IsUserGuard } from 'src/guards/is-user.guard';
import { User } from 'src/decorators/user.decorator';

@Controller('inbox')
export class InboxController {
    constructor(
        private smsService: SmsService
        ) { }

        @Get()
        getAll(): any {
            return this.smsService.getInboxAll();
        }

        @Get(':id')
        getOne(@Param('id') id:number): any {
            return this.smsService.getInboxOne(id);
        }

}
