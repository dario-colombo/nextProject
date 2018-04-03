Object.defineProperty(exports, "__esModule", { value: true });
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = require("nativescript-angular/platform");
var core_1 = require("@angular/core");
var environment_1 = require("./environments/environment");
var application = require("application");
var TnsOneSignal = require('nativescript-onesignal').TnsOneSignal;
var app_module_1 = require("./app.module");
var dialogs = require("ui/dialogs");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
if (application.android) {
    application.on(application.launchEvent, function (args) {
        try {
            console.log('launchEvent');
            TnsOneSignal
                .startInit(application.android.context)
                .autoPromptLocation(false)
                .inFocusDisplaying(com.onesignal.OneSignal.OSInFocusDisplayOption.None)
                .setNotificationReceivedHandler(new com.onesignal.OneSignal.NotificationReceivedHandler({
                notificationReceived: function (notification) {
                    console.log('notification received');
                    console.dir(notification);
                    if (notification.isAppInFocus) {
                        dialogs.confirm({
                            title: notification.payload.title,
                            message: notification.payload.body,
                            okButtonText: 'More',
                            cancelButtonText: 'Cancel',
                        }).then(function (action) {
                            if (action) {
                                var pay = JSON.stringify(notification.payload.additionalData);
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
            }))
                .setNotificationOpenedHandler(new com.onesignal.OneSignal.NotificationOpenedHandler({
                notificationOpened: function (result) {
                    console.log('notification opened');
                    //console.dir(result);
                    dialogs.confirm({
                        title: result.notification.payload.title,
                        message: result.notification.payload.body,
                        okButtonText: 'More',
                        cancelButtonText: 'Cancel',
                    }).then(function (action) {
                        if (action) {
                            var payload = result.notification.payload.additionalData;
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
        }
        catch (error) {
            console.log('error LaunchEventData');
            console.dir(error);
        }
    });
    application.on(application.resumeEvent, function (args) {
        console.log('application resumed');
    });
    application.android.registerBroadcastReceiver(android.content.Intent.ACTION_BATTERY_CHANGED, function onReceiveCallback(context, intent) {
        var level = intent.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1);
        var scale = intent.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1);
        var percent = (level / scale) * 100.0;
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
    var MyDelegate = /** @class */ (function (_super) {
        __extends(MyDelegate, _super);
        function MyDelegate() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MyDelegate.prototype.applicationDidFinishLaunchingWithOptions = function (app, launchOptions) {
            try {
                console.dir('TnsOneSignal', TnsOneSignal);
                TnsOneSignal.initWithLaunchOptionsAppId(launchOptions, 'ce278cc6-4292-4be3-86a3-49d18c4bf761');
            }
            catch (error) {
                console.error('error', error);
            }
            return true;
        };
        MyDelegate.ObjCProtocols = [UIApplicationDelegate];
        return MyDelegate;
    }(UIResponder));
    application.ios.delegate = MyDelegate;
}
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBHQUEwRztBQUMxRywwREFBNEU7QUFDNUUsc0NBQXVEO0FBQ3ZELDBEQUF5RDtBQUN6RCx5Q0FBMkM7QUFFM0MsSUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUMsWUFBWSxDQUFDO0FBQ3BFLDJDQUF5QztBQUN6QyxvQ0FBc0M7QUFRdEMsRUFBRSxDQUFDLENBQUMseUJBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLHFCQUFjLEVBQUUsQ0FBQztBQUNyQixDQUFDO0FBR0QsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFHdEIsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLFVBQUMsSUFBcUI7UUFDMUQsSUFBSSxDQUFDO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUUzQixZQUFZO2lCQUNQLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztpQkFDdEMsa0JBQWtCLENBQUMsS0FBSyxDQUFDO2lCQUN6QixpQkFBaUIsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUM7aUJBQ3RFLDhCQUE4QixDQUFDLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsMkJBQTJCLENBQXNEO2dCQUNySSxvQkFBb0IsRUFDaEIsVUFBVSxZQUEwQztvQkFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO29CQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUMxQixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFDNUIsT0FBTyxDQUFDLE9B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IHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcclxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tICdhcHBsaWNhdGlvbic7XHJcblxyXG5jb25zdCBUbnNPbmVTaWduYWwgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtb25lc2lnbmFsJykuVG5zT25lU2lnbmFsO1xyXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC5tb2R1bGUnO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gJ3VpL2RpYWxvZ3MnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkV2ZW50RGF0YSwgTGF1bmNoRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbic7XHJcblxyXG5cclxuZGVjbGFyZSB2YXIgR01TU2VydmljZXM6IGFueTtcclxuXHJcblxyXG5cclxuaWYgKGVudmlyb25tZW50LnByb2R1Y3Rpb24pIHtcclxuICAgIGVuYWJsZVByb2RNb2RlKCk7XHJcbn1cclxuXHJcblxyXG5pZiAoYXBwbGljYXRpb24uYW5kcm9pZCkge1xyXG5cclxuXHJcbiAgICBhcHBsaWNhdGlvbi5vbihhcHBsaWNhdGlvbi5sYXVuY2hFdmVudCwgKGFyZ3M6IExhdW5jaEV2ZW50RGF0YSkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsYXVuY2hFdmVudCcpO1xyXG5cclxuICAgICAgICAgICAgVG5zT25lU2lnbmFsXHJcbiAgICAgICAgICAgICAgICAuc3RhcnRJbml0KGFwcGxpY2F0aW9uLmFuZHJvaWQuY29udGV4dClcclxuICAgICAgICAgICAgICAgIC5hdXRvUHJvbXB0TG9jYXRpb24oZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAuaW5Gb2N1c0Rpc3BsYXlpbmcoY29tLm9uZXNpZ25hbC5PbmVTaWduYWwuT1NJbkZvY3VzRGlzcGxheU9wdGlvbi5Ob25lKVxyXG4gICAgICAgICAgICAgICAgLnNldE5vdGlmaWNhdGlvblJlY2VpdmVkSGFuZGxlcihuZXcgY29tLm9uZXNpZ25hbC5PbmVTaWduYWwuTm90aWZpY2F0aW9uUmVjZWl2ZWRIYW5kbGVyKDxjb20ub25lc2lnbmFsLk9uZVNpZ25hbC5Ob3RpZmljYXRpb25SZWNlaXZlZEhhbmRsZXI+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25SZWNlaXZlZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChub3RpZmljYXRpb246IGNvbS5vbmVzaWduYWwuT1NOb3RpZmljYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm90aWZpY2F0aW9uIHJlY2VpdmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kaXIobm90aWZpY2F0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm90aWZpY2F0aW9uLmlzQXBwSW5Gb2N1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG5vdGlmaWNhdGlvbi5wYXlsb2FkLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbm90aWZpY2F0aW9uLnBheWxvYWQuYm9keSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ01vcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbikgeyAvL01vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXkgPSBKU09OLnN0cmluZ2lmeShub3RpZmljYXRpb24ucGF5bG9hZC5hZGRpdGlvbmFsRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGF5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEaWFsb2cgY2xvc2VkIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qT25lU2lnbmFsQ2xhc3Mub25SZWNlaXZlZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBub3RpZmljYXRpb24ucGF5bG9hZC50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogbm90aWZpY2F0aW9uLnBheWxvYWQuYm9keSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogT25lU2lnbmFsQ2xhc3MucGFyc2VKc29uKG5vdGlmaWNhdGlvbi5wYXlsb2FkLmFkZGl0aW9uYWxEYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuc2V0Tm90aWZpY2F0aW9uT3BlbmVkSGFuZGxlcihuZXcgY29tLm9uZXNpZ25hbC5PbmVTaWduYWwuTm90aWZpY2F0aW9uT3BlbmVkSGFuZGxlcig8Y29tLm9uZXNpZ25hbC5PbmVTaWduYWwuTm90aWZpY2F0aW9uT3BlbmVkSGFuZGxlcj57XHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uT3BlbmVkOiBmdW5jdGlvbiAocmVzdWx0OiBjb20ub25lc2lnbmFsLk9TTm90aWZpY2F0aW9uT3BlblJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm90aWZpY2F0aW9uIG9wZW5lZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUuZGlyKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzdWx0Lm5vdGlmaWNhdGlvbi5wYXlsb2FkLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzdWx0Lm5vdGlmaWNhdGlvbi5wYXlsb2FkLmJvZHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6ICdNb3JlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKChhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb24pIHsgLy9Nb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHJlc3VsdC5ub3RpZmljYXRpb24ucGF5bG9hZC5hZGRpdGlvbmFsRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihKU09OLnN0cmluZ2lmeShyZXN1bHQubm90aWZpY2F0aW9uLnBheWxvYWQuYWRkaXRpb25hbERhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEaWFsb2cgY2xvc2VkIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogIE9uZVNpZ25hbENsYXNzLm9uT3BlbmVkKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbmVkOiByZXN1bHQuYWN0aW9uLnR5cGUgPT0gY29tLm9uZXNpZ25hbC5PU05vdGlmaWNhdGlvbkFjdGlvbi5BY3Rpb25UeXBlLk9wZW5lZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogT25lU2lnbmFsQ2xhc3MucGFyc2VKc29uKHJlc3VsdC5ub3RpZmljYXRpb24ucGF5bG9hZC5hZGRpdGlvbmFsRGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkqL1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIC5pbml0KCk7XHJcblxyXG4gICAgICAgICAgICBUbnNPbmVTaWduYWwuc2V0U3Vic2NyaXB0aW9uKHRydWUpO1xyXG4gICAgICAgICAgIC8vIFRuc09uZVNpZ25hbC5hZGRTdWJzY3JpcHRpb25PYnNlcnZlcihuZXcgc2lnbmFsT2JzKG5ldyBPYnNlcnZhYmxlKSk7XHJcbiAgICAgICAgICAgIC8vIFRPRE8gY3JlYXRlIHRoZSBhZGRTdWJzY3JpcHRpb25PYnNlcnZlclxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIExhdW5jaEV2ZW50RGF0YScpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmRpcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGFwcGxpY2F0aW9uLm9uKGFwcGxpY2F0aW9uLnJlc3VtZUV2ZW50LCAoYXJnczogQXBwbGljYXRpb25FdmVudERhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYXBwbGljYXRpb24gcmVzdW1lZCcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYXBwbGljYXRpb24uYW5kcm9pZC5yZWdpc3RlckJyb2FkY2FzdFJlY2VpdmVyKGFuZHJvaWQuY29udGVudC5JbnRlbnQuQUNUSU9OX0JBVFRFUllfQ0hBTkdFRCxcclxuICAgICAgICBmdW5jdGlvbiBvblJlY2VpdmVDYWxsYmFjayhjb250ZXh0OiBhbmRyb2lkLmNvbnRlbnQuQ29udGV4dCwgaW50ZW50OiBhbmRyb2lkLmNvbnRlbnQuSW50ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxldmVsID0gaW50ZW50LmdldEludEV4dHJhKGFuZHJvaWQub3MuQmF0dGVyeU1hbmFnZXIuRVhUUkFfTEVWRUwsIC0xKTtcclxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBpbnRlbnQuZ2V0SW50RXh0cmEoYW5kcm9pZC5vcy5CYXR0ZXJ5TWFuYWdlci5FWFRSQV9TQ0FMRSwgLTEpO1xyXG4gICAgICAgICAgICBjb25zdCBwZXJjZW50ID0gKGxldmVsIC8gc2NhbGUpICogMTAwLjA7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdCYXR0ZXJ5OiAnICsgcGVyY2VudCArICclJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgLypjbGFzcyBNYWluQWN0aXZpdHkgZXh0ZW5kcyBBY3Rpdml0eSBpbXBsZW1lbnRzIE9TU3Vic2NyaXB0aW9uT2JzZXJ2ZXIge1xyXG5cclxuICAgICAgICBvbk9TU3Vic2NyaXB0aW9uQ2hhbmdlZChzdGF0ZUNoYW5nZXMpIHtcclxuICAgICAgICAgICAgaWYgKCFzdGF0ZUNoYW5nZXMuZ2V0RnJvbSgpLmdldFN1YnNjcmliZWQoKSAmJlxyXG4gICAgICAgICAgICAgICAgc3RhdGVDaGFuZ2VzLmdldFRvKCkuZ2V0U3Vic2NyaWJlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3Vic2NyaWJlZCcpO1xyXG4gICAgICAgICAgICAgICAgLy8gZ2V0IHBsYXllciBJRFxyXG4gICAgICAgICAgICAgICAgc3RhdGVDaGFuZ2VzLmdldFRvKCkuZ2V0VXNlcklkKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGVidWdcIiwgXCJvbk9TUGVybWlzc2lvbkNoYW5nZWQ6IFwiICsgc3RhdGVDaGFuZ2VzKTtcclxuICAgICAgICB9XHJcbiAgICB9Ki9cclxuXHJcblxyXG59XHJcbmlmIChhcHBsaWNhdGlvbi5pb3MpIHtcclxuXHJcbiAgICBHTVNTZXJ2aWNlcy5wcm92aWRlQVBJS2V5KCdBSXphU3lCZ0EtYVp4M0trN1N0VFh5elB4QWJaZzBqQ0x1d1FnQzQnKTsgLy8gTUFQU1xyXG5cclxuICAgIGNsYXNzIE15RGVsZWdhdGUgZXh0ZW5kcyBVSVJlc3BvbmRlciBpbXBsZW1lbnRzIFVJQXBwbGljYXRpb25EZWxlZ2F0ZSB7XHJcblxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgT2JqQ1Byb3RvY29scyA9IFtVSUFwcGxpY2F0aW9uRGVsZWdhdGVdO1xyXG5cclxuICAgICAgICBwdWJsaWMgYXBwbGljYXRpb25EaWRGaW5pc2hMYXVuY2hpbmdXaXRoT3B0aW9ucyhhcHA6IFVJQXBwbGljYXRpb24sIGxhdW5jaE9wdGlvbnM6IE5TRGljdGlvbmFyeTxhbnksIGFueT4pOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kaXIoJ1Ruc09uZVNpZ25hbCcsIFRuc09uZVNpZ25hbCk7XHJcbiAgICAgICAgICAgICAgICBUbnNPbmVTaWduYWwuaW5pdFdpdGhMYXVuY2hPcHRpb25zQXBwSWQobGF1bmNoT3B0aW9ucywgJ2NlMjc4Y2M2LTQyOTItNGJlMy04NmEzLTQ5ZDE4YzRiZjc2MScpO1xyXG5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yJywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFwcGxpY2F0aW9uLmlvcy5kZWxlZ2F0ZSA9IE15RGVsZWdhdGU7XHJcbn1cclxuXHJcbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xyXG4iXX0=