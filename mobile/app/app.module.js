Object.defineProperty(exports, "__esModule", { value: true });
// SYSTEM LIBRARY
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var http_client_1 = require("nativescript-angular/http-client");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var frame_1 = require("ui/frame");
var http_1 = require("@angular/common/http");
var nativescript_ng_shadow_1 = require("nativescript-ng-shadow");
var angular_1 = require("nativescript-localize/angular");
// COMPONENT
var app_component_1 = require("./app.component");
var login_component_1 = require("./modules/login/login.component");
// MODULES
var app_routing_module_1 = require("./app-routing.module");
// PRIVATE SERVICES
var device_service_1 = require("./services/device.service");
var dialog_service_1 = require("./services/dialog.service");
// COMMON LIBRARY (if inject here will be singleton)
var authguard_1 = require("./frontendcommons/guard/authguard");
var user_service_1 = require("./services/user.service");
var http_factory_1 = require("./frontendcommons/factories/http.factory");
var login_service_1 = require("./frontendcommons/services/login/login.service");
var http_interceptor_1 = require("./frontendcommons/interceptors/http.interceptor");
var date_interceptor_1 = require("./frontendcommons/interceptors/date.interceptor");
var booking_service_1 = require("./frontendcommons/services/booking/booking.service");
var serverstream_service_1 = require("./frontendcommons/services/serverstream/serverstream.service");
var actornotification_service_1 = require("./frontendcommons/services/actornotification/actornotification.service");
var resolver_1 = require("./frontendcommons/services/serverstream/resolver");
var address_service_1 = require("./frontendcommons/services/address/address.service");
frame_1.Frame.defaultTransition = { name: 'slide' };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                http_client_1.NativeScriptHttpClientModule,
                forms_1.NativeScriptFormsModule,
                nativescript_ng_shadow_1.NgShadowModule,
                angular_1.NativeScriptLocalizeModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
            ],
            providers: [
                authguard_1.AuthGuard,
                user_service_1.UserService,
                http_factory_1.HttpFactory,
                login_service_1.LoginService,
                device_service_1.DeviceInfoService,
                dialog_service_1.DialogService,
                booking_service_1.BookingService,
                address_service_1.AddressService,
                serverstream_service_1.ServerstreamService,
                actornotification_service_1.ActornotificationService,
                resolver_1.Resolver,
                /*   {
                       provide: ErrorHandler,
                       useClass: AppErrorHandler
                   },  */
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: http_interceptor_1.MyHttpInterceptor,
                    multi: true
                },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: date_interceptor_1.DateInterceptor,
                    multi: true
                }
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlCQUFpQjtBQUNqQixzQ0FBZ0c7QUFDaEcsb0RBQXFFO0FBQ3JFLGdFQUFnRjtBQUNoRixnRkFBOEU7QUFDOUUsa0NBQWlDO0FBQ2pDLDZDQUF5RDtBQUN6RCxpRUFBd0Q7QUFDeEQseURBQTJFO0FBRTNFLFlBQVk7QUFDWixpREFBK0M7QUFDL0MsbUVBQWlFO0FBRWhFLFVBQVU7QUFDWCwyREFBd0Q7QUFFeEQsbUJBQW1CO0FBQ25CLDREQUE4RDtBQUM5RCw0REFBMEQ7QUFFMUQsb0RBQW9EO0FBQ3BELCtEQUE4RDtBQUM5RCx3REFBc0Q7QUFDdEQseUVBQXVFO0FBQ3ZFLGdGQUE4RTtBQUU5RSxvRkFBb0Y7QUFDcEYsb0ZBQWtGO0FBQ2xGLHNGQUFvRjtBQUNwRixxR0FBbUc7QUFDbkcsb0hBQWtIO0FBQ2xILDZFQUE0RTtBQUM1RSxzRkFBb0Y7QUFJcEYsYUFBSyxDQUFDLGlCQUFpQixHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDO0FBaUQ1QztJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBL0NyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLHFDQUFnQjtnQkFDaEIsMENBQTRCO2dCQUM1QiwrQkFBdUI7Z0JBQ3ZCLHVDQUFjO2dCQUNkLG9DQUEwQjthQUM3QjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixnQ0FBYzthQUNqQjtZQUNELFNBQVMsRUFBRTtnQkFDUCxxQkFBUztnQkFDVCwwQkFBVztnQkFDWCwwQkFBVztnQkFDWCw0QkFBWTtnQkFDWixrQ0FBaUI7Z0JBQ2pCLDhCQUFhO2dCQUNiLGdDQUFjO2dCQUNkLGdDQUFjO2dCQUNkLDBDQUFtQjtnQkFDbkIsb0RBQXdCO2dCQUN4QixtQkFBUTtnQkFDWDs7O3lCQUdTO2dCQUNOO29CQUNJLE9BQU8sRUFBRSx3QkFBaUI7b0JBQzFCLFFBQVEsRUFBRSxvQ0FBaUI7b0JBQzNCLEtBQUssRUFBRSxJQUFJO2lCQUNkO2dCQUNEO29CQUNJLE9BQU8sRUFBRSx3QkFBaUI7b0JBQzFCLFFBQVEsRUFBRSxrQ0FBZTtvQkFDekIsS0FBSyxFQUFFLElBQUk7aUJBQ2Q7YUFDSjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gU1lTVEVNIExJQlJBUllcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSwgRXJyb3JIYW5kbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnQnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcclxuaW1wb3J0IHsgRnJhbWUgfSBmcm9tICd1aS9mcmFtZSc7XHJcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBOZ1NoYWRvd01vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZy1zaGFkb3cnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRMb2NhbGl6ZU1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1sb2NhbGl6ZS9hbmd1bGFyJztcclxuXHJcbi8vIENPTVBPTkVOVFxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbW9kdWxlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xyXG5cclxuIC8vIE1PRFVMRVNcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcclxuXHJcbi8vIFBSSVZBVEUgU0VSVklDRVNcclxuaW1wb3J0IHsgRGV2aWNlSW5mb1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RldmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGlhbG9nLnNlcnZpY2UnO1xyXG5cclxuLy8gQ09NTU9OIExJQlJBUlkgKGlmIGluamVjdCBoZXJlIHdpbGwgYmUgc2luZ2xldG9uKVxyXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuL2Zyb250ZW5kY29tbW9ucy9ndWFyZC9hdXRoZ3VhcmQnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cEZhY3RvcnkgfSBmcm9tICcuL2Zyb250ZW5kY29tbW9ucy9mYWN0b3JpZXMvaHR0cC5mYWN0b3J5JztcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9mcm9udGVuZGNvbW1vbnMvc2VydmljZXMvbG9naW4vbG9naW4uc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcEVycm9ySGFuZGxlciB9IGZyb20gJy4vZnJvbnRlbmRjb21tb25zL2Vycm9yaGFuZGxlci9hcHAtZXJyb3ItaGFuZGxlcic7XHJcbmltcG9ydCB7IE15SHR0cEludGVyY2VwdG9yIH0gZnJvbSAnLi9mcm9udGVuZGNvbW1vbnMvaW50ZXJjZXB0b3JzL2h0dHAuaW50ZXJjZXB0b3InO1xyXG5pbXBvcnQgeyBEYXRlSW50ZXJjZXB0b3IgfSBmcm9tICcuL2Zyb250ZW5kY29tbW9ucy9pbnRlcmNlcHRvcnMvZGF0ZS5pbnRlcmNlcHRvcic7XHJcbmltcG9ydCB7IEJvb2tpbmdTZXJ2aWNlIH0gZnJvbSAnLi9mcm9udGVuZGNvbW1vbnMvc2VydmljZXMvYm9va2luZy9ib29raW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTZXJ2ZXJzdHJlYW1TZXJ2aWNlIH0gZnJvbSAnLi9mcm9udGVuZGNvbW1vbnMvc2VydmljZXMvc2VydmVyc3RyZWFtL3NlcnZlcnN0cmVhbS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0b3Jub3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9mcm9udGVuZGNvbW1vbnMvc2VydmljZXMvYWN0b3Jub3RpZmljYXRpb24vYWN0b3Jub3RpZmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IFJlc29sdmVyIH0gZnJvbSAnLi9mcm9udGVuZGNvbW1vbnMvc2VydmljZXMvc2VydmVyc3RyZWFtL3Jlc29sdmVyJztcclxuaW1wb3J0IHsgQWRkcmVzc1NlcnZpY2UgfSBmcm9tICcuL2Zyb250ZW5kY29tbW9ucy9zZXJ2aWNlcy9hZGRyZXNzL2FkZHJlc3Muc2VydmljZSc7XHJcblxyXG5cclxuXHJcbkZyYW1lLmRlZmF1bHRUcmFuc2l0aW9uID0geyBuYW1lOiAnc2xpZGUnIH07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgICAgTmdTaGFkb3dNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0TG9jYWxpemVNb2R1bGUsXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEF1dGhHdWFyZCxcclxuICAgICAgICBVc2VyU2VydmljZSxcclxuICAgICAgICBIdHRwRmFjdG9yeSxcclxuICAgICAgICBMb2dpblNlcnZpY2UsXHJcbiAgICAgICAgRGV2aWNlSW5mb1NlcnZpY2UsXHJcbiAgICAgICAgRGlhbG9nU2VydmljZSxcclxuICAgICAgICBCb29raW5nU2VydmljZSxcclxuICAgICAgICBBZGRyZXNzU2VydmljZSxcclxuICAgICAgICBTZXJ2ZXJzdHJlYW1TZXJ2aWNlLFxyXG4gICAgICAgIEFjdG9ybm90aWZpY2F0aW9uU2VydmljZSxcclxuICAgICAgICBSZXNvbHZlcixcclxuICAgICAvKiAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogRXJyb3JIYW5kbGVyLFxyXG4gICAgICAgICAgICB1c2VDbGFzczogQXBwRXJyb3JIYW5kbGVyXHJcbiAgICAgICAgfSwgICovXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgICAgICAgdXNlQ2xhc3M6IE15SHR0cEludGVyY2VwdG9yLFxyXG4gICAgICAgICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcclxuICAgICAgICAgICAgdXNlQ2xhc3M6IERhdGVJbnRlcmNlcHRvcixcclxuICAgICAgICAgICAgbXVsdGk6IHRydWVcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cclxuIl19