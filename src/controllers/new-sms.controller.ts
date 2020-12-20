import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('new-sms')
export class NewSmsController {
    @Get()
    newSms(){
        console.log("-*--*-*-*-*-*- newSms UPDATE")
    }
    @Post()
    newSmsInfos(@Body() sms:any){
        console.log("-*--*-*-*-*-*- newSms UPDATE INFOS -> ", sms)
    }
}
