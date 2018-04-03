Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var page_1 = require("ui/page");
var serverstream_service_1 = require("../../frontendcommons/services/serverstream/serverstream.service");
var content_view_1 = require("tns-core-modules/ui/content-view");
var label_1 = require("tns-core-modules/ui/label");
var nativescript_localize_1 = require("nativescript-localize");
var timer_1 = require("rxjs/observable/timer");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/takeUntil");
require("rxjs/add/operator/retry");
require("rxjs/add/operator/retryWhen");
var TnsOneSignal = require('nativescript-onesignal').TnsOneSignal;
var TabsComponent = /** @class */ (function () {
    function TabsComponent(serverstreamService) {
        this.serverstreamService = serverstreamService;
        this.stopTrigger = new Subject_1.Subject();
        // this.serverstreamService.activateServerStream(); //start the server polling services
        this.variant = nativescript_localize_1.localize('tabs.home'); //translate the menu text
    }
    TabsComponent.prototype.ngOnInit = function () {
        console.log('tabs init');
        var status = TnsOneSignal.getPermissionSubscriptionState();
        console.log('user id' + status.getSubscriptionStatus().getUserId());
        console.log('getSubscribed' + status.getSubscriptionStatus().getSubscribed());
        console.log('getUserSubscriptionSetting' + status.getSubscriptionStatus().getUserSubscriptionSetting());
        console.log('getPushToken' + status.getSubscriptionStatus().getPushToken());
        // TnsOneSignal.setSubscription(true);
    };
    TabsComponent.prototype.ngOnDestroy = function () {
        //   this.serverstreamService.destroyServerStream(); //stop the server polling services
        console.log('tabs destroyed');
    };
    Object.defineProperty(TabsComponent.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            if (this._title !== value) {
                this._title = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    TabsComponent.prototype.onSelectedIndexChanged = function (args) {
        var tabView = args.object;
        var selectedTabViewItem = tabView.items[args.newIndex];
        this.title = selectedTabViewItem.title.substr(1);
    };
    // TABS REDRAW TO UPDATE BADGE AND FIT TABS IN SCREEN
    TabsComponent.prototype.delayTbLoad = function (event) {
        var _this = this;
        //start listening for messageUnread
        this.listenForUnread(event);
        ///fix bug tab layout not defined in first cycle of onloaded
        var source = timer_1.timer(1);
        source.subscribe(function (val) {
            _this.drawTabs(event);
        });
    };
    //used to set the width of tabs
    TabsComponent.prototype.drawTabs = function (event) {
        console.log('draw tabs');
        var tabView = event.object;
        if (platform_1.isAndroid) {
            var nativeTabView = tabView._tabLayout.getChildAt(0);
            for (var i = 0; i < nativeTabView.getChildCount(); i++) {
                var maxWidth = platform_1.screen.mainScreen.widthPixels / nativeTabView.getChildCount();
                nativeTabView.getChildAt(i).getChildAt(1).setMaxWidth(maxWidth);
                nativeTabView.getChildAt(i).getChildAt(1).setMaxLines(1);
                nativeTabView.getChildAt(i).getChildAt(1).setTextSize(12);
                nativeTabView.getChildAt(i).getChildAt(1).setEllipsize(null);
                nativeTabView.getChildAt(i).getChildAt(1).setPadding(0, 0, 0, 0);
            }
        }
    };
    TabsComponent.prototype.listenForUnread = function (event) {
        var _this = this;
        this.serverstreamService.getUnreadMessage
            .takeUntil(this.stopTrigger)
            .retryWhen(function (errors) { return errors
            .do(function (error) {
            console.log('getUnreadMessage error' + error.status);
        })
            .delayWhen(function (val) { return Observable_1.Observable.timer(10000); }); })
            .subscribe(function (result) {
            _this.messageCountUnread = result;
            if (result != '') {
                console.log('got new' + result);
                _this.updateBadge(event, result);
                //  this.redrawTabs(event);
            }
        }, function (error) { return console.log(error); }, function () { return console.log('getUnreadMessage terminated'); });
    };
    TabsComponent.prototype.updateBadge = function (event, result) {
        console.log('updateBadge called');
        var tabView = event.object;
        if (platform_1.isAndroid) {
            var nativeTabView = tabView._tabLayout.getChildAt(0);
            var maxWidth = platform_1.screen.mainScreen.widthPixels / nativeTabView.getChildCount();
            var view = nativeTabView.getChildAt(2); //tab number 3
            // delete the previous badge if exist
            if (this.contentView) {
                console.log('cancel previous badge');
                view.removeView(this.contentView.nativeView);
            }
            this.contentView = new content_view_1.ContentView();
            this.contentView.className = 'badge';
            this.contentView.backgroundColor = 'red';
            this.contentView.width = 20;
            this.contentView.height = 20;
            this.contentView.borderColor = 'red';
            this.contentView.borderWidth = 1;
            this.contentView.borderRadius = 15;
            this.contentView.marginTop = -26;
            this.contentView.marginRight = -maxWidth / 7;
            var label = new label_1.Label();
            label.className = 'badge-text';
            label.text = result;
            label.fontSize = 12;
            label.verticalAlignment = 'middle';
            label.horizontalAlignment = 'center';
            label.color = new page_1.Color('white');
            this.contentView.content = label;
            this.contentView._inheritStyleScope(tabView._styleScope);
            this.contentView._setupUI(tabView._context);
            this.contentView.onLoaded();
            console.log('add badge');
            view.addView(this.contentView.nativeView);
        }
        if (platform_1.isIOS) {
            // tabView.items.forEach((item) => {
            //  console.log('looping')
            //if (item.badgeValue) {
            tabView.items[2]._iosViewController.tabBarItem.badgeValue = result.toString();
            // }
            // });
        }
    };
    __decorate([
        core_1.ViewChild('myTabView'),
        __metadata("design:type", core_1.ElementRef)
    ], TabsComponent.prototype, "myTabView", void 0);
    TabsComponent = __decorate([
        core_1.Component({
            selector: 'TabsComponent',
            moduleId: module.id,
            templateUrl: './tabs.component.html',
        }),
        __param(0, core_1.Inject(serverstream_service_1.ServerstreamService)),
        __metadata("design:paramtypes", [serverstream_service_1.ServerstreamService])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQStHO0FBQy9HLHFDQUFvRDtBQUdwRCxnQ0FBZ0M7QUFDaEMseUdBQXVHO0FBQ3ZHLGlFQUErRDtBQUMvRCxtREFBa0Q7QUFFbEQsK0RBQWlEO0FBQ2pELCtDQUE4QztBQUU5Qyw4Q0FBNkM7QUFDN0Msd0NBQXVDO0FBRXZDLHVDQUFxQztBQUNyQyxtQ0FBaUM7QUFDakMsdUNBQXFDO0FBRXJDLElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLFlBQVksQ0FBQztBQVNwRTtJQVdJLHVCQUFpRCxtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUx6RixnQkFBVyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBTXpCLHVGQUF1RjtRQUN0RixJQUFJLENBQUMsT0FBTyxHQUFHLGdDQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyx5QkFBeUI7SUFHbkUsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpCLElBQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO1FBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFFLENBQUM7UUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUM5RSxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLDBCQUEwQixFQUFFLENBQUMsQ0FBQztRQUN4RyxPQUFPLENBQUMsR0FBRyxD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USxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQztRQWFlLFdBQUEsYUFBTSxDQUFDLDBDQUFtQixDQUFDLENBQUE7eUNBQThCLDBDQUFtQjtPQVhoRixhQUFhLENBbUt6QjtJQUFELG9CQUFDO0NBQUEsQUFuS0QsSUFtS0M7QUFuS1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUywgc2NyZWVuIH0gZnJvbSAncGxhdGZvcm0nO1xyXG5pbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgVGFiVmlldyB9IGZyb20gJ3VpL3RhYi12aWV3JztcclxuXHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAndWkvcGFnZSc7XHJcbmltcG9ydCB7IFNlcnZlcnN0cmVhbVNlcnZpY2UgfSBmcm9tICcuLi8uLi9mcm9udGVuZGNvbW1vbnMvc2VydmljZXMvc2VydmVyc3RyZWFtL3NlcnZlcnN0cmVhbS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29udGVudFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvbnRlbnQtdmlldyc7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9sYWJlbCc7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWxvY2FsaXplJztcclxuaW1wb3J0IHsgdGltZXIgfSBmcm9tICdyeGpzL29ic2VydmFibGUvdGltZXInO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xyXG5cclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90YWtlVW50aWwnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3JldHJ5JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9yZXRyeVdoZW4nO1xyXG5cclxuY29uc3QgVG5zT25lU2lnbmFsID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LW9uZXNpZ25hbCcpLlRuc09uZVNpZ25hbDtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnVGFic0NvbXBvbmVudCcsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RhYnMuY29tcG9uZW50Lmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBAVmlld0NoaWxkKCdteVRhYlZpZXcnKSBteVRhYlZpZXc6IEVsZW1lbnRSZWY7XHJcbiAgICBtZXNzYWdlQ291bnRVbnJlYWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3RpdGxlOiBzdHJpbmc7XHJcbiAgICB0YWJWaWV3RDtcclxuICAgIHZhcmlhbnQ7XHJcbiAgICBzdG9wVHJpZ2dlciA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICBjb250ZW50VmlldztcclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoU2VydmVyc3RyZWFtU2VydmljZSkgcHJpdmF0ZSBzZXJ2ZXJzdHJlYW1TZXJ2aWNlOiBTZXJ2ZXJzdHJlYW1TZXJ2aWNlKSB7XHJcbiAgICAgICAvLyB0aGlzLnNlcnZlcnN0cmVhbVNlcnZpY2UuYWN0aXZhdGVTZXJ2ZXJTdHJlYW0oKTsgLy9zdGFydCB0aGUgc2VydmVyIHBvbGxpbmcgc2VydmljZXNcclxuICAgICAgICB0aGlzLnZhcmlhbnQgPSBsb2NhbGl6ZSgndGFicy5ob21lJyk7IC8vdHJhbnNsYXRlIHRoZSBtZW51IHRleHRcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0YWJzIGluaXQnKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gVG5zT25lU2lnbmFsLmdldFBlcm1pc3Npb25TdWJzY3JpcHRpb25TdGF0ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd1c2VyIGlkJyArIHN0YXR1cy5nZXRTdWJzY3JpcHRpb25TdGF0dXMoKS5nZXRVc2VySWQoKSApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRTdWJzY3JpYmVkJyArIHN0YXR1cy5nZXRTdWJzY3JpcHRpb25TdGF0dXMoKS5nZXRTdWJzY3JpYmVkKCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdnZXRVc2VyU3Vic2NyaXB0aW9uU2V0dGluZycgKyBzdGF0dXMuZ2V0U3Vic2NyaXB0aW9uU3RhdHVzKCkuZ2V0VXNlclN1YnNjcmlwdGlvblNldHRpbmcoKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2dldFB1c2hUb2tlbicgKyBzdGF0dXMuZ2V0U3Vic2NyaXB0aW9uU3RhdHVzKCkuZ2V0UHVzaFRva2VuKCkpO1xyXG5cclxuICAgICAgIC8vIFRuc09uZVNpZ25hbC5zZXRTdWJzY3JpcHRpb24odHJ1ZSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAvLyAgIHRoaXMuc2VydmVyc3RyZWFtU2VydmljZS5kZXN0cm95U2VydmVyU3RyZWFtKCk7IC8vc3RvcCB0aGUgc2VydmVyIHBvbGxpbmcgc2VydmljZXNcclxuICAgICAgICBjb25zb2xlLmxvZygndGFicyBkZXN0cm95ZWQnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0IHRpdGxlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RpdGxlICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNlbGVjdGVkSW5kZXhDaGFuZ2VkKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKSB7XHJcbiAgICAgICAgY29uc3QgdGFiVmlldyA9IDxUYWJWaWV3PmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVGFiVmlld0l0ZW0gPSB0YWJWaWV3Lml0ZW1zW2FyZ3MubmV3SW5kZXhdO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBzZWxlY3RlZFRhYlZpZXdJdGVtLnRpdGxlLnN1YnN0cigxKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUQUJTIFJFRFJBVyBUTyBVUERBVEUgQkFER0UgQU5EIEZJVCBUQUJTIElOIFNDUkVFTlxyXG4gICAgZGVsYXlUYkxvYWQoZXZlbnQ6IEV2ZW50RGF0YSkge1xyXG4gICAgICAgIC8vc3RhcnQgbGlzdGVuaW5nIGZvciBtZXNzYWdlVW5yZWFkXHJcbiAgICAgICAgdGhpcy5saXN0ZW5Gb3JVbnJlYWQoZXZlbnQpO1xyXG4gICAgICAgIC8vL2ZpeCBidWcgdGFiIGxheW91dCBub3QgZGVmaW5lZCBpbiBmaXJzdCBjeWNsZSBvZiBvbmxvYWRlZFxyXG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IHRpbWVyKDEpO1xyXG4gICAgICAgIHNvdXJjZS5zdWJzY3JpYmUodmFsID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3VGFicyhldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vdXNlZCB0byBzZXQgdGhlIHdpZHRoIG9mIHRhYnNcclxuICAgIGRyYXdUYWJzKGV2ZW50OiBFdmVudERhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZHJhdyB0YWJzJyk7XHJcbiAgICAgICAgY29uc3QgdGFiVmlldyA9IDxhbnk+ZXZlbnQub2JqZWN0O1xyXG4gICAgICAgIGlmIChpc0FuZHJvaWQpIHtcclxuICAgICAgICBjb25zdCBuYXRpdmVUYWJWaWV3ID0gdGFiVmlldy5fdGFiTGF5b3V0LmdldENoaWxkQXQoMCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXRpdmVUYWJWaWV3LmdldENoaWxkQ291bnQoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heFdpZHRoID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhQaXhlbHMgLyBuYXRpdmVUYWJWaWV3LmdldENoaWxkQ291bnQoKTtcclxuICAgICAgICAgICAgbmF0aXZlVGFiVmlldy5nZXRDaGlsZEF0KGkpLmdldENoaWxkQXQoMSkuc2V0TWF4V2lkdGgobWF4V2lkdGgpO1xyXG4gICAgICAgICAgICBuYXRpdmVUYWJWaWV3LmdldENoaWxkQXQoaSkuZ2V0Q2hpbGRBdCgxKS5zZXRNYXhMaW5lcygxKTtcclxuICAgICAgICAgICAgbmF0aXZlVGFiVmlldy5nZXRDaGlsZEF0KGkpLmdldENoaWxkQXQoMSkuc2V0VGV4dFNpemUoMTIpO1xyXG4gICAgICAgICAgICBuYXRpdmVUYWJWaWV3LmdldENoaWxkQXQoaSkuZ2V0Q2hpbGRBdCgxKS5zZXRFbGxpcHNpemUobnVsbCk7XHJcbiAgICAgICAgICAgIG5hdGl2ZVRhYlZpZXcuZ2V0Q2hpbGRBdChpKS5nZXRDaGlsZEF0KDEpLnNldFBhZGRpbmcoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpc3RlbkZvclVucmVhZChldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2VydmVyc3RyZWFtU2VydmljZS5nZXRVbnJlYWRNZXNzYWdlXHJcbiAgICAgICAgICAgIC50YWtlVW50aWwodGhpcy5zdG9wVHJpZ2dlcilcclxuICAgICAgICAgICAgLnJldHJ5V2hlbihlcnJvcnMgPT4gZXJyb3JzXHJcbiAgICAgICAgICAgICAgICAvLyBsb2cgZXJyb3IgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIC5kbyhlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRVbnJlYWRNZXNzYWdlIGVycm9yJyArIGVycm9yLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXN0YXJ0IGluIDEwIHNlY29uZHNcclxuICAgICAgICAgICAgICAgICAgICAuZGVsYXlXaGVuKHZhbCA9PiBPYnNlcnZhYmxlLnRpbWVyKDEwMDAwKSksXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VDb3VudFVucmVhZCA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnb3QgbmV3JyArIHJlc3VsdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUJhZGdlKGV2ZW50LCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgdGhpcy5yZWRyYXdUYWJzKGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLCBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnZ2V0VW5yZWFkTWVzc2FnZSB0ZXJtaW5hdGVkJylcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUJhZGdlKGV2ZW50LCByZXN1bHQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlQmFkZ2UgY2FsbGVkJyk7XHJcbiAgICAgICAgY29uc3QgdGFiVmlldyA9IDxhbnk+ZXZlbnQub2JqZWN0O1xyXG5cclxuICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG5hdGl2ZVRhYlZpZXcgPSB0YWJWaWV3Ll90YWJMYXlvdXQuZ2V0Q2hpbGRBdCgwKTtcclxuICAgICAgICBjb25zdCBtYXhXaWR0aCA9IHNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzIC8gbmF0aXZlVGFiVmlldy5nZXRDaGlsZENvdW50KCk7XHJcbiAgICAgICAgY29uc3QgdmlldyA9IG5hdGl2ZVRhYlZpZXcuZ2V0Q2hpbGRBdCgyKTsgLy90YWIgbnVtYmVyIDNcclxuICAgICAgICAvLyBkZWxldGUgdGhlIHByZXZpb3VzIGJhZGdlIGlmIGV4aXN0XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGVudFZpZXcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NhbmNlbCBwcmV2aW91cyBiYWRnZScpO1xyXG4gICAgICAgICAgICB2aWV3LnJlbW92ZVZpZXcodGhpcy5jb250ZW50Vmlldy5uYXRpdmVWaWV3KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudFZpZXcgPSBuZXcgQ29udGVudFZpZXcoKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRWaWV3LmNsYXNzTmFtZSA9ICdiYWRnZSc7XHJcbiAgICAgICAgdGhpcy5jb250ZW50Vmlldy5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcclxuICAgICAgICB0aGlzLmNvbnRlbnRWaWV3LndpZHRoID0gMjA7XHJcbiAgICAgICAgdGhpcy5jb250ZW50Vmlldy5oZWlnaHQgPSAyMDtcclxuICAgICAgICB0aGlzLmNvbnRlbnRWaWV3LmJvcmRlckNvbG9yID0gJ3JlZCc7XHJcbiAgICAgICAgdGhpcy5jb250ZW50Vmlldy5ib3JkZXJXaWR0aCA9IDE7XHJcbiAgICAgICAgdGhpcy5jb250ZW50Vmlldy5ib3JkZXJSYWRpdXMgPSAxNTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRWaWV3Lm1hcmdpblRvcCA9IC0yNjtcclxuICAgICAgICB0aGlzLmNvbnRlbnRWaWV3Lm1hcmdpblJpZ2h0ID0gLW1heFdpZHRoIC8gNztcclxuXHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSBuZXcgTGFiZWwoKTtcclxuICAgICAgICBsYWJlbC5jbGFzc05hbWUgPSAnYmFkZ2UtdGV4dCc7XHJcbiAgICAgICAgbGFiZWwudGV4dCA9IHJlc3VsdDtcclxuICAgICAgICBsYWJlbC5mb250U2l6ZSA9IDEyO1xyXG4gICAgICAgIGxhYmVsLnZlcnRpY2FsQWxpZ25tZW50ID0gJ21pZGRsZSc7XHJcbiAgICAgICAgbGFiZWwuaG9yaXpvbnRhbEFsaWdubWVudCA9ICdjZW50ZXInO1xyXG4gICAgICAgIGxhYmVsLmNvbG9yID0gbmV3IENvbG9yKCd3aGl0ZScpO1xyXG4gICAgICAgIHRoaXMuY29udGVudFZpZXcuY29udGVudCA9IGxhYmVsO1xyXG4gICAgICAgICg8YW55PnRoaXMuY29udGVudFZpZXcpLl9pbmhlcml0U3R5bGVTY29wZSgoPGFueT50YWJWaWV3KS5fc3R5bGVTY29wZSk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50Vmlldy5fc2V0dXBVSSh0YWJWaWV3Ll9jb250ZXh0KTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRWaWV3Lm9uTG9hZGVkKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FkZCBiYWRnZScpO1xyXG4gICAgICAgIHZpZXcuYWRkVmlldyh0aGlzLmNvbnRlbnRWaWV3Lm5hdGl2ZVZpZXcpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzSU9TKSB7XHJcbiAgICAgICAvLyB0YWJWaWV3Lml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgIC8vICBjb25zb2xlLmxvZygnbG9vcGluZycpXHJcbiAgICAgICAgICAgIC8vaWYgKGl0ZW0uYmFkZ2VWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGFiVmlldy5pdGVtc1syXS5faW9zVmlld0NvbnRyb2xsZXIudGFiQmFySXRlbS5iYWRnZVZhbHVlID0gcmVzdWx0LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgLy8gfVxyXG4gICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iXX0=