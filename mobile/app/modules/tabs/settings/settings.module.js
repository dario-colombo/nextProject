Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var complaints_component_1 = require("./complaints/complaints.component");
var favouriteplaces_component_1 = require("./favouriteplaces/favouriteplaces.component");
var help_component_1 = require("./help/help.component");
var calendar_component_1 = require("./calendar/calendar.component");
var languages_component_1 = require("./languages/languages.component");
var messagecenter_component_1 = require("./messagecenter/messagecenter.component");
var notifications_component_1 = require("./notifications/notifications.component");
var userprofile_component_1 = require("./userprofile/userprofile.component");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-ui-listview/angular");
var angular_2 = require("nativescript-ui-dataform/angular");
var routes = [
    { path: 'notifications', component: notifications_component_1.NotificationsComponent },
    { path: 'userprofile', component: userprofile_component_1.UserProfileComponent },
    { path: 'favourite', component: favouriteplaces_component_1.FavouritePlacesComponent },
    { path: 'message', component: messagecenter_component_1.MessageCenterComponent },
    { path: 'complaints', component: complaints_component_1.ComplaintsComponent },
    { path: 'help', component: help_component_1.HelpComponent },
    { path: 'languages', component: languages_component_1.LanguagesComponent },
    { path: 'calendar', component: calendar_component_1.CalendarComponent },
];
var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                router_1.NativeScriptRouterModule.forChild(routes),
                angular_1.NativeScriptUIListViewModule,
                angular_2.NativeScriptUIDataFormModule
            ],
            declarations: [
                complaints_component_1.ComplaintsComponent,
                favouriteplaces_component_1.FavouritePlacesComponent,
                help_component_1.HelpComponent,
                languages_component_1.LanguagesComponent,
                messagecenter_component_1.MessageCenterComponent,
                notifications_component_1.NotificationsComponent,
                userprofile_component_1.UserProfileComponent,
                calendar_component_1.CalendarComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());
exports.SettingsModule = SettingsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLDBFQUF3RTtBQUN4RSx5RkFBdUY7QUFDdkYsd0RBQXNEO0FBQ3RELG9FQUFrRTtBQUNsRSx1RUFBcUU7QUFDckUsbUZBQWlGO0FBQ2pGLG1GQUFpRjtBQUNqRiw2RUFBMkU7QUFFM0Usc0RBQXVFO0FBQ3ZFLDREQUFnRjtBQUNoRiw0REFBZ0Y7QUFFaEYsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxnREFBc0IsRUFBRTtJQUM1RCxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLDRDQUFvQixFQUFFO0lBQ3hELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsb0RBQXdCLEVBQUU7SUFDMUQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxnREFBc0IsRUFBRTtJQUN0RCxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLDBDQUFtQixFQUFFO0lBQ3RELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUMxQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7Q0FDckQsQ0FBQztBQXlCRjtJQUFBO0lBQThCLENBQUM7SUFBbEIsY0FBYztRQXZCMUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDekMsc0NBQTRCO2dCQUM1QixzQ0FBNEI7YUFFL0I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsMENBQW1CO2dCQUNuQixvREFBd0I7Z0JBQ3hCLDhCQUFhO2dCQUNiLHdDQUFrQjtnQkFDbEIsZ0RBQXNCO2dCQUN0QixnREFBc0I7Z0JBQ3RCLDRDQUFvQjtnQkFDcEIsc0NBQWlCO2FBRXBCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxjQUFjLENBQUk7SUFBRCxxQkFBQztDQUFBLEFBQS9CLElBQStCO0FBQWxCLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ29tcGxhaW50c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcGxhaW50cy9jb21wbGFpbnRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZhdm91cml0ZVBsYWNlc0NvbXBvbmVudCB9IGZyb20gJy4vZmF2b3VyaXRlcGxhY2VzL2Zhdm91cml0ZXBsYWNlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIZWxwQ29tcG9uZW50IH0gZnJvbSAnLi9oZWxwL2hlbHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExhbmd1YWdlc0NvbXBvbmVudCB9IGZyb20gJy4vbGFuZ3VhZ2VzL2xhbmd1YWdlcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZXNzYWdlQ2VudGVyQ29tcG9uZW50IH0gZnJvbSAnLi9tZXNzYWdlY2VudGVyL21lc3NhZ2VjZW50ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVzZXJQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi91c2VycHJvZmlsZS91c2VycHJvZmlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXInO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6ICdub3RpZmljYXRpb25zJywgY29tcG9uZW50OiBOb3RpZmljYXRpb25zQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICd1c2VycHJvZmlsZScsIGNvbXBvbmVudDogVXNlclByb2ZpbGVDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJ2Zhdm91cml0ZScsIGNvbXBvbmVudDogRmF2b3VyaXRlUGxhY2VzQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICdtZXNzYWdlJywgY29tcG9uZW50OiBNZXNzYWdlQ2VudGVyQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICdjb21wbGFpbnRzJywgY29tcG9uZW50OiBDb21wbGFpbnRzQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICdoZWxwJywgY29tcG9uZW50OiBIZWxwQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICdsYW5ndWFnZXMnLCBjb21wb25lbnQ6IExhbmd1YWdlc0NvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAnY2FsZW5kYXInLCBjb21wb25lbnQ6IENhbGVuZGFyQ29tcG9uZW50IH0sXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGVcclxuXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQ29tcGxhaW50c0NvbXBvbmVudCxcclxuICAgICAgICBGYXZvdXJpdGVQbGFjZXNDb21wb25lbnQsXHJcbiAgICAgICAgSGVscENvbXBvbmVudCxcclxuICAgICAgICBMYW5ndWFnZXNDb21wb25lbnQsXHJcbiAgICAgICAgTWVzc2FnZUNlbnRlckNvbXBvbmVudCxcclxuICAgICAgICBOb3RpZmljYXRpb25zQ29tcG9uZW50LFxyXG4gICAgICAgIFVzZXJQcm9maWxlQ29tcG9uZW50LFxyXG4gICAgICAgIENhbGVuZGFyQ29tcG9uZW50XHJcblxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZXR0aW5nc01vZHVsZSB7IH1cclxuIl19