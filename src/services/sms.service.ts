import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { inbox } from 'src/entities/inbox.entity';
import { outbox } from 'src/entities/outbox.entity';
import { outbox_multipart } from 'src/entities/outbox_multipart.entity';
import { sentitems } from 'src/entities/sentitems.entity';
import { phones } from 'src/entities/phones.entity';

@Injectable()
export class SmsService {

    constructor(
        @InjectRepository(inbox) private inboxRepository: Repository<inbox>,
        @InjectRepository(outbox) private outboxRepository: Repository<outbox>,
        @InjectRepository(outbox_multipart) private outboxMultipartRepository: Repository<outbox_multipart>,
        @InjectRepository(sentitems) private sentRepository: Repository<sentitems>,
        @InjectRepository(phones) private phonesRepository: Repository<phones>,
    ) { }

    getPhoneInfos() {
        return this.phonesRepository.find()
    }

    getInboxAll() {
        return this.inboxRepository.find()
    }

    getInboxOne(id) {
        return this.inboxRepository.find(id)
    }

    getOutboxAll() {
        return this.outboxRepository.find()
    }

    getSentitemAll() {
        return this.sentRepository.find()
    }

    getSentitemOne(id) {
        return this.sentRepository.find(id)
    }


    async sendSms(message) {
        let msgSplit = message.text.match(/(.|[\r\n]){1,160}/g); // Replace n with the size of the substring
        console.log(msgSplit)
        let msg: any = {}
        if (!msgSplit.length) {
            return null
        }
        msg.TextDecoded = msgSplit[0]
        msg.DestinationNumber = message.number
        msg.MultiPart = 'false'
        msg.CreatorID = ""
        // msg.Coding = "Unicode_Compression"
        msg.SenderID = 0
        msg.DeliveryReport= 'yes'
        // msg.Class=0

        if (msgSplit.length == 1) {
            return this.outboxRepository.save(msg)
        }
        msg.MultiPart = 'true'
        let msgOrigine = await this.outboxRepository.save(msg)

        let subSmsList = await Promise.all(msgSplit.map(async (txt, i) => {
            if (i > 0) {
                let subSms = {
                    ID: msgOrigine.ID,
                    SequencePosition: i+1,
                    TextDecoded:txt,
                    // Class:0,
                    // Coding :"Unicode_Compression"
                }
                console.log(subSms)
                return await this.outboxMultipartRepository.save(subSms)
            }
            return
        }).filter(x=>x))
        msgOrigine['subSmsList']=subSmsList
        return msgOrigine

    }
}
