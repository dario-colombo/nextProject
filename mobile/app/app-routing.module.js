Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var authguard_1 = require("./frontendcommons/guard/authguard");
var login_component_1 = require("./modules/login/login.component");
var routes = [
    { path: '', redirectTo: '/tabs', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    {
        path: 'tabs',
        loadChildren: './modules/tabs/tabs.module#TabsModule',
        canActivate: [authguard_1.AuthGuard],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBQ3ZFLCtEQUE4RDtBQUM5RCxtRUFBaUU7QUFJakUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNwRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDNUM7UUFDSSxJQUFJLEVBQUUsTUFBTTtRQUNaLFlBQVksRUFBRSx1Q0FBdUM7UUFDckQsV0FBVyxFQUFFLENBQUMscUJBQVMsQ0FBQztLQUUzQjtDQUNKLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuL2Zyb250ZW5kY29tbW9ucy9ndWFyZC9hdXRoZ3VhcmQnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbW9kdWxlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZXNvbHZlciB9IGZyb20gJy4vZnJvbnRlbmRjb21tb25zL3NlcnZpY2VzL3NlcnZlcnN0cmVhbS9yZXNvbHZlcic7XHJcblxyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL3RhYnMnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxyXG4gICAgeyBwYXRoOiAnbG9naW4nLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ3RhYnMnLFxyXG4gICAgICAgIGxvYWRDaGlsZHJlbjogJy4vbW9kdWxlcy90YWJzL3RhYnMubW9kdWxlI1RhYnNNb2R1bGUnICxcclxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXHJcbiAgICAgICAvKiByZXNvbHZlOiB7IG1lc3NhZ2U6IFJlc29sdmVyIH0qL1xyXG4gICAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=