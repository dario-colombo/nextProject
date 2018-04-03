import { ChangeDetectorRef, Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { isAndroid, isIOS, screen } from 'platform';
import { SelectedIndexChangedEventData, TabView } from 'ui/tab-view';

import { Color } from 'ui/page';
import { ServerstreamService } from '../../frontendcommons/services/serverstream/serverstream.service';
import { ContentView } from 'tns-core-modules/ui/content-view';
import { Label } from 'tns-core-modules/ui/label';
import { EventData } from 'data/observable';
import { localize } from 'nativescript-localize';
import { timer } from 'rxjs/observable/timer';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';

const TnsOneSignal = require('nativescript-onesignal').TnsOneSignal;


@Component({
    selector: 'TabsComponent',
    moduleId: module.id,
    templateUrl: './tabs.component.html',
})

export class TabsComponent implements OnInit, OnDestroy {
    @ViewChild('myTabView') myTabView: ElementRef;
    messageCountUnread: number;
    private _title: string;
    tabViewD;
    variant;
    stopTrigger = new Subject();
    contentView;



    constructor(@Inject(ServerstreamService) private serverstreamService: ServerstreamService) {
       // this.serverstreamService.activateServerStream(); //start the server polling services
        this.variant = localize('tabs.home'); //translate the menu text


    }

    ngOnInit(): void {
        console.log('tabs init');

        const status = TnsOneSignal.getPermissionSubscriptionState();
        console.log('user id' + status.getSubscriptionStatus().getUserId() );
        console.log('getSubscribed' + status.getSubscriptionStatus().getSubscribed());
        console.log('getUserSubscriptionSetting' + status.getSubscriptionStatus().getUserSubscriptionSetting());
        console.log('getPushToken' + status.getSubscriptionStatus().getPushToken());

       // TnsOneSignal.setSubscription(true);

    }


    ngOnDestroy() {
     //   this.serverstreamService.destroyServerStream(); //stop the server polling services
        console.log('tabs destroyed');
    }


    get title(): string {
        return this._title;
    }

    set title(value: string) {
        if (this._title !== value) {
            this._title = value;
        }
    }

    onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
        const tabView = <TabView>args.object;
        const selectedTabViewItem = tabView.items[args.newIndex];
        this.title = selectedTabViewItem.title.substr(1);
    }

    // TABS REDRAW TO UPDATE BADGE AND FIT TABS IN SCREEN
    delayTbLoad(event: EventData) {
        //start listening for messageUnread
        this.listenForUnread(event);
        ///fix bug tab layout not defined in first cycle of onloaded
        const source = timer(1);
        source.subscribe(val => {
            this.drawTabs(event);
        });
    }


    //used to set the width of tabs
    drawTabs(event: EventData) {
        console.log('draw tabs');
        const tabView = <any>event.object;
        if (isAndroid) {
        const nativeTabView = tabView._tabLayout.getChildAt(0);
        for (let i = 0; i < nativeTabView.getChildCount(); i++) {
            const maxWidth = screen.mainScreen.widthPixels / nativeTabView.getChildCount();
            nativeTabView.getChildAt(i).getChildAt(1).setMaxWidth(maxWidth);
            nativeTabView.getChildAt(i).getChildAt(1).setMaxLines(1);
            nativeTabView.getChildAt(i).getChildAt(1).setTextSize(12);
            nativeTabView.getChildAt(i).getChildAt(1).setEllipsize(null);
            nativeTabView.getChildAt(i).getChildAt(1).setPadding(0, 0, 0, 0);
        }
    }
    }

    listenForUnread(event) {
        this.serverstreamService.getUnreadMessage
            .takeUntil(this.stopTrigger)
            .retryWhen(errors => errors
                // log error message
                    .do(error => {
                        console.log('getUnreadMessage error' + error.status);
                    })
                    // restart in 10 seconds
                    .delayWhen(val => Observable.timer(10000)),
            )
            .subscribe(
                (result) => {
                    this.messageCountUnread = result;
                    if (result != '') {
                        console.log('got new' + result);

                        this.updateBadge(event, result);
                        //  this.redrawTabs(event);

                    }
                }
                , error => console.log(error),
                () => console.log('getUnreadMessage terminated')
            );
    }
    updateBadge(event, result) {
        console.log('updateBadge called');
        const tabView = <any>event.object;

        if (isAndroid) {

        const nativeTabView = tabView._tabLayout.getChildAt(0);
        const maxWidth = screen.mainScreen.widthPixels / nativeTabView.getChildCount();
        const view = nativeTabView.getChildAt(2); //tab number 3
        // delete the previous badge if exist
        if (this.contentView) {
            console.log('cancel previous badge');
            view.removeView(this.contentView.nativeView);
        }

        this.contentView = new ContentView();
        this.contentView.className = 'badge';
        this.contentView.backgroundColor = 'red';
        this.contentView.width = 20;
        this.contentView.height = 20;
        this.contentView.borderColor = 'red';
        this.contentView.borderWidth = 1;
        this.contentView.borderRadius = 15;
        this.contentView.marginTop = -26;
        this.contentView.marginRight = -maxWidth / 7;

        const label = new Label();
        label.className = 'badge-text';
        label.text = result;
        label.fontSize = 12;
        label.verticalAlignment = 'middle';
        label.horizontalAlignment = 'center';
        label.color = new Color('white');
        this.contentView.content = label;
        (<any>this.contentView)._inheritStyleScope((<any>tabView)._styleScope);
        this.contentView._setupUI(tabView._context);
        this.contentView.onLoaded();
        console.log('add badge');
        view.addView(this.contentView.nativeView);
    }
    if (isIOS) {
       // tabView.items.forEach((item) => {
          //  console.log('looping')
            //if (item.badgeValue) {
                tabView.items[2]._iosViewController.tabBarItem.badgeValue = result.toString();
           // }
       // });
    }

    }




}
