import { Module, MiddlewareConsumer, RequestMethod, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmsService } from './services/sms.service';
import { SendController } from './controllers/send.controller';
import { InboxController } from './controllers/inbox.controller';
import { OutboxController } from './controllers/outbox.controller';
import { AuthMiddleware } from './auth.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from './environment/environment';
import { inbox } from './entities/inbox.entity';
import { outbox_multipart } from './entities/outbox_multipart.entity';
import { outbox } from './entities/outbox.entity';
import { phones } from './entities/phones.entity';
import { sentitems } from './entities/sentitems.entity';
import { NewSmsController } from './controllers/new-sms.controller';


@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot(environment.bddConfig),
    TypeOrmModule.forFeature([inbox, outbox_multipart, outbox, phones, sentitems])
  ],
  controllers: [AppController, SendController, InboxController, OutboxController, NewSmsController],
  providers: [AppService, SmsService],
})
export class AppModule {

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
  
}
