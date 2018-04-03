import { Component, OnInit, ChangeDetectorRef, Inject, OnDestroy } from '@angular/core';
import { ActornotificationService } from '../../../../frontendcommons/services/actornotification/actornotification.service';
import {
    ActorNotificationListItem,
    GetActorNotificationsReply
} from '../../../../frontendcommons/models/actornotification';
import { ServerstreamService } from '../../../../frontendcommons/services/serverstream/serverstream.service';
import { environment } from '../../../../environments/environment.prod';
import { tap } from 'rxjs/operators';
import { AppError } from '../../../../frontendcommons/errorhandler/app-error';
import 'rxjs/add/operator/repeatWhen';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/retryWhen';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
    selector: 'MessageCenter',
    moduleId: module.id,
    templateUrl: './messagecenter.component.html'
})
export class MessageCenterComponent implements OnInit, OnDestroy {
    messageList: Array<ActorNotificationListItem>;
    serverStream$;

    constructor(@Inject(ServerstreamService) private serverstreamService: ServerstreamService) {
    }

    ngOnInit() {
        this.serverStream$ = this.serverstreamService.getMessageList
            .subscribe(
                result => this.messageList = result.ActorNotificationList,
                error => console.log(error)
            );
       // console.log(typeof this.serverStream$)
    }
    ngOnDestroy() {
        //console.log('msg destroyed');
        console.log(typeof this.serverStream$);
        this.serverStream$.unsubscribe();
    }

}
