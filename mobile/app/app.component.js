Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var OnRouteToURL;
if (platform_1.isIOS) {
    var _a = require('./delegate'), CustomAppDelegate = _a.CustomAppDelegate, iOSOnRouteToURL = _a.iOSOnRouteToURL;
    application.ios.delegate = CustomAppDelegate;
    OnRouteToURL = iOSOnRouteToURL;
}
else if (platform_1.isAndroid) {
    OnRouteToURL = require('./activity').AndroidOnRouteToURL;
}
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        OnRouteToURL.subscribe(function (url) {
            _this.handleRouting(url);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.handleRouting = function (url) {
        // Assume everything after :// is an app route
        // in production you might want to limit which routes are allowed to deep-link
        var route = url;
        console.log("AppComponent: Navigate to route '" + route + "'");
        // Do the routing in the Angular Zone on next tick,
        // to ensure that we're in the right context and router is ready.
        /* setTimeout(() => {
             this.zone.run(() => {
                 this.routerExt.navigateByUrl(route);
             });
         });*/
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ns-app',
            templateUrl: 'app.component.html',
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUVsRCxxQ0FBb0Q7QUFDcEQsSUFBSSxZQUFtQyxDQUFDO0FBRXhDLEVBQUUsQ0FBQyxDQUFDLGdCQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ0YsSUFBQSwwQkFBOEQsRUFBNUQsd0NBQWlCLEVBQUUsb0NBQWUsQ0FBMkI7SUFDckUsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUM7SUFDN0MsWUFBWSxHQUFHLGVBQWUsQ0FBQztBQUNuQyxDQUFDO0FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ25CLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsbUJBQW1CLENBQUM7QUFDN0QsQ0FBQztBQU9EO0lBRUk7UUFBQSxpQkFLQztRQUpHLFlBQVksQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHO1lBQ3ZCLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsK0JBQVEsR0FBUjtJQUVBLENBQUM7SUFHRCxvQ0FBYSxHQUFiLFVBQWMsR0FBVztRQUNyQiw4Q0FBOEM7UUFDOUMsOEVBQThFO1FBQzlFLElBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFvQyxLQUFLLE1BQUcsQ0FBQyxDQUFDO1FBRTFELG1EQUFtRDtRQUNuRCxpRUFBaUU7UUFDbEU7Ozs7Y0FJTTtJQUNULENBQUM7SUEzQlEsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtZQUNqQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzs7T0FDVyxZQUFZLENBNkJ4QjtJQUFELG1CQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcy9SZXBsYXlTdWJqZWN0JztcclxuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUywgc2NyZWVuIH0gZnJvbSAncGxhdGZvcm0nO1xyXG5sZXQgT25Sb3V0ZVRvVVJMOiBSZXBsYXlTdWJqZWN0PHN0cmluZz47XHJcblxyXG5pZiAoaXNJT1MpIHtcclxuICAgIGNvbnN0IHsgQ3VzdG9tQXBwRGVsZWdhdGUsIGlPU09uUm91dGVUb1VSTCB9ID0gcmVxdWlyZSgnLi9kZWxlZ2F0ZScpO1xyXG4gICAgYXBwbGljYXRpb24uaW9zLmRlbGVnYXRlID0gQ3VzdG9tQXBwRGVsZWdhdGU7XHJcbiAgICBPblJvdXRlVG9VUkwgPSBpT1NPblJvdXRlVG9VUkw7XHJcbn0gZWxzZSBpZiAoaXNBbmRyb2lkKSB7XHJcbiAgICBPblJvdXRlVG9VUkwgPSByZXF1aXJlKCcuL2FjdGl2aXR5JykuQW5kcm9pZE9uUm91dGVUb1VSTDtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25zLWFwcCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIE9uUm91dGVUb1VSTC5zdWJzY3JpYmUoKHVybCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVJvdXRpbmcodXJsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoYW5kbGVSb3V0aW5nKHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gQXNzdW1lIGV2ZXJ5dGhpbmcgYWZ0ZXIgOi8vIGlzIGFuIGFwcCByb3V0ZVxyXG4gICAgICAgIC8vIGluIHByb2R1Y3Rpb24geW91IG1pZ2h0IHdhbnQgdG8gbGltaXQgd2hpY2ggcm91dGVzIGFyZSBhbGxvd2VkIHRvIGRlZXAtbGlua1xyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gdXJsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBBcHBDb21wb25lbnQ6IE5hdmlnYXRlIHRvIHJvdXRlICcke3JvdXRlfSdgKTtcclxuXHJcbiAgICAgICAgLy8gRG8gdGhlIHJvdXRpbmcgaW4gdGhlIEFuZ3VsYXIgWm9uZSBvbiBuZXh0IHRpY2ssXHJcbiAgICAgICAgLy8gdG8gZW5zdXJlIHRoYXQgd2UncmUgaW4gdGhlIHJpZ2h0IGNvbnRleHQgYW5kIHJvdXRlciBpcyByZWFkeS5cclxuICAgICAgIC8qIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0Lm5hdmlnYXRlQnlVcmwocm91dGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTsqL1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ==