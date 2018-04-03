// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from 'nativescript-angular/platform';
import { enableProdMode, OnInit } from '@angular/core';
import { environment } from './environments/environment';
import * as application from 'application';

const TnsOneSignal = require('nativescript-onesignal').TnsOneSignal;
import { AppModule } from './app.module';
import * as dialogs from 'ui/dialogs';
import { ApplicationEventData, LaunchEventData } from 'tns-core-modules/application';


declare var GMSServices: any;



if (environment.production) {
    enableProdMode();
}


if (application.android) {


    application.on(application.launchEvent, (args: LaunchEventData) => {
        try {
            console.log('launchEvent');

            TnsOneSignal
                .startInit(application.android.context)
                .autoPromptLocation(false)
                .inFocusDisplaying(com.onesignal.OneSignal.OSInFocusDisplayOption.None)
                .setNotificationReceivedHandler(new com.onesignal.OneSignal.NotificationReceivedHandler(<com.onesignal.OneSignal.NotificationReceivedHandler>{
                        notificationReceived:
                            function (notification: com.onesignal.OSNotification) {
                                console.log('notification received');
                                console.dir(notification);
                                if (notification.isAppInFocus) {
                                    dialogs.confirm({
                                        title: notification.payload.title,
                                        message: notification.payload.body,
                                        okButtonText: 'More',
                                        cancelButtonText: 'Cancel',
                                    }).then((action) => {
                                        if (action) { //More
                                            const pay = JSON.stringify(notification.payload.additionalData);
                                            console.log(pay);
                                        }
                                        console.log('Dialog closed!');
                                    });
                                }

                                /*OneSignalClass.onReceived({
                                    title: notification.payload.title,
                                    body: notification.payload.body,
                                    data: OneSignalClass.parseJson(notification.payload.additionalData),
                                })*/
                            },
                    })
                )
                .setNotificationOpenedHandler(new com.onesignal.OneSignal.NotificationOpenedHandler(<com.onesignal.OneSignal.NotificationOpenedHandler>{
                    notificationOpened: function (result: com.onesignal.OSNotificationOpenResult) {
                        console.log('notification opened');
                        //console.dir(result);
                        dialogs.confirm({
                            title: result.notification.payload.title,
                            message: result.notification.payload.body,
                            okButtonText: 'More',
                            cancelButtonText: 'Cancel',
                        }).then((action) => {
                            if (action) { //More
                                const payload = result.notification.payload.additionalData;
                                console.dir(JSON.stringify(result.notification.payload.additionalData));
                            }
                            console.log('Dialog closed!');
                        });
                        /*  OneSignalClass.onOpened({
                              opened: result.action.type == com.onesignal.OSNotificationAction.ActionType.Opened,
                              data: OneSignalClass.parseJson(result.notification.payload.additionalData),
                          })*/
                    },
                }))
                .init();

            TnsOneSignal.setSubscription(true);
           // TnsOneSignal.addSubscriptionObserver(new signalObs(new Observable));
            // TODO create the addSubscriptionObserver





        } catch (error) {
            console.log('error LaunchEventData');
            console.dir(error);
        }

    });

    application.on(application.resumeEvent, (args: ApplicationEventData) => {
        console.log('application resumed');
    });

    application.android.registerBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED,
        function onReceiveCallback(context: android.content.Context, intent: android.content.Intent) {
            const level = intent.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
            const scale = intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
            const percent = (level / scale) * 100.0;
            console.log('Battery: ' + percent + '%');
        });

    /*class MainActivity extends Activity implements OSSubscriptionObserver {

        onOSSubscriptionChanged(stateChanges) {
            if (!stateChanges.getFrom().getSubscribed() &&
                stateChanges.getTo().getSubscribed()) {
                console.log('subscribed');
                // get player ID
                stateChanges.getTo().getUserId();
            }

            console.log("Debug", "onOSPermissionChanged: " + stateChanges);
        }
    }*/


}
if (application.ios) {

    GMSServices.provideAPIKey('AIzaSyBgA-aZx3Kk7StTXyzPxAbZg0jCLuwQgC4'); // MAPS

    class MyDelegate extends UIResponder implements UIApplicationDelegate {

        public static ObjCProtocols = [UIApplicationDelegate];

        public applicationDidFinishLaunchingWithOptions(app: UIApplication, launchOptions: NSDictionary<any, any>): boolean {

            try {

                console.dir('TnsOneSignal', TnsOneSignal);
                TnsOneSignal.initWithLaunchOptionsAppId(launchOptions, 'ce278cc6-4292-4be3-86a3-49d18c4bf761');

            } catch (error) {
                console.error('error', error);
            }

            return true;
        }

    }

    application.ios.delegate = MyDelegate;
}

platformNativeScriptDynamic().bootstrapModule(AppModule);
