import { Controller, Get, Post, Body, HttpService } from '@nestjs/common';

@Controller('new-sms')
export class NewSmsController {
    constructor(private http: HttpService){

    }

    @Get()
    newSms(){
        console.log("-*--*-*-*-*-*- newSms UPDATE")
    }
    @Post()
    newSmsInfos(@Body() sms:any){
        console.log("-*--*-*-*-*-*- newSms UPDATE INFOS -> ", sms)
        return this.sendNotifToAdmin(sms)
    }


    private sendNotifToAdmin(sms:any){
        let notif = {
            "data":{},
            "title":"Nouveau SMS",
            "body":`${sms.number} a envoyé \n ${sms.text}`,
            "timestamp":Date.now(),
            "icon":"assets/icons/icon-152x152.png"
        }
        return this.http.post("http://192.168.1.15:1901/notification/user/1", notif)
    }
}
