Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var user_service_1 = require("../../../services/user.service");
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(routerExtensions, user) {
        this.routerExtensions = routerExtensions;
        this.user = user;
        this.myItems = [
            { link: 'tabs/notifications', name: 'Notifications setting', icon: String.fromCharCode(0xf0f3) },
            { link: 'tabs/userprofile', name: 'User Profile', icon: String.fromCharCode(0xf21b) },
            { link: 'tabs/calendar', name: 'Calendar', icon: String.fromCharCode(0xf073) },
            { link: 'tabs/favourite', name: 'Favourite Destinations', icon: String.fromCharCode(0xf276) },
            { link: 'tabs/message', name: 'Message', icon: String.fromCharCode(0xf0e0) },
            { link: 'tabs/complaints', name: 'Complaints', icon: String.fromCharCode(0xf044) },
            { link: 'tabs/help', name: 'Help', icon: String.fromCharCode(0xf05a) },
            { link: 'tabs/languages', name: 'Languages', icon: String.fromCharCode(0xf0ac) },
            { link: '/', name: 'Logout', icon: String.fromCharCode(0xf08b) }
        ];
    }
    SettingsComponent.prototype.onItemTap = function (args) {
        console.log('------------------------ ItemTapped: ' + args);
        // console.log(args);
        if (args === '/') {
            console.log('logout');
            this.user.logout();
            return;
        }
        this.routerExtensions.navigate([args]);
        // this.routerExtensions.navigate(["/notifications"]);
        //  this.router.navigate(['notifications'])
    };
    SettingsComponent.prototype.ngOnInit = function () {
        console.log('settings init');
    };
    SettingsComponent = __decorate([
        core_1.Component({
            selector: 'Settings',
            moduleId: module.id,
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions, user_service_1.UserService])
    ], SettingsComponent);
    return SettingsComponent;
}());
exports.SettingsComponent = SettingsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0dGluZ3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Y7QUFDbEYsNkRBQXdEO0FBQ3hELCtEQUE2RDtBQVU3RDtJQUlJLDJCQUFvQixnQkFBa0MsRUFBVSxJQUFpQjtRQUE3RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUM3RSxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ1gsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFDO1lBQzlGLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUM7WUFDbkYsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUM7WUFDNUUsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFDO1lBQzNGLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFDO1lBQzFFLEVBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUM7WUFDaEYsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUM7WUFDcEUsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBQztZQUM5RSxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBQztTQUNqRSxDQUFDO0lBRU4sQ0FBQztJQUVNLHFDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM1RCxxQkFBcUI7UUFDckIsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbkIsTUFBTSxDQUFDO1FBRVgsQ0FBQztRQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLHNEQUFzRDtRQUN0RCwyQ0FBMkM7SUFDL0MsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFuQ1EsaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2QyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtTQUNsRCxDQUFDO3lDQUt3Qyx1Q0FBZ0IsRUFBZ0IsMEJBQVc7T0FKeEUsaUJBQWlCLENBcUM3QjtJQUFELHdCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ1NldHRpbmdzJyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2V0dGluZ3MuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vc2V0dGluZ3MuY29tcG9uZW50LmNzcyddLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIFNldHRpbmdzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBteUl0ZW1zOiBBcnJheTxhbnk+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSB1c2VyOiBVc2VyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMubXlJdGVtcyA9IFtcclxuICAgICAgICAgICAge2xpbms6ICd0YWJzL25vdGlmaWNhdGlvbnMnLCBuYW1lOiAnTm90aWZpY2F0aW9ucyBzZXR0aW5nJywgaWNvbjogU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwZjMpfSxcclxuICAgICAgICAgICAge2xpbms6ICd0YWJzL3VzZXJwcm9maWxlJywgbmFtZTogJ1VzZXIgUHJvZmlsZScsIGljb246IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMjFiKX0sXHJcbiAgICAgICAgICAgIHtsaW5rOiAndGFicy9jYWxlbmRhcicsIG5hbWU6ICdDYWxlbmRhcicsIGljb246IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDczKX0sXHJcbiAgICAgICAgICAgIHtsaW5rOiAndGFicy9mYXZvdXJpdGUnLCBuYW1lOiAnRmF2b3VyaXRlIERlc3RpbmF0aW9ucycsIGljb246IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMjc2KX0sXHJcbiAgICAgICAgICAgIHtsaW5rOiAndGFicy9tZXNzYWdlJywgbmFtZTogJ01lc3NhZ2UnLCBpY29uOiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjBlMCl9LFxyXG4gICAgICAgICAgICB7bGluazogJ3RhYnMvY29tcGxhaW50cycsIG5hbWU6ICdDb21wbGFpbnRzJywgaWNvbjogU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwNDQpfSxcclxuICAgICAgICAgICAge2xpbms6ICd0YWJzL2hlbHAnLCBuYW1lOiAnSGVscCcsIGljb246IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDVhKX0sXHJcbiAgICAgICAgICAgIHtsaW5rOiAndGFicy9sYW5ndWFnZXMnLCBuYW1lOiAnTGFuZ3VhZ2VzJywgaWNvbjogU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwYWMpfSxcclxuICAgICAgICAgICAge2xpbms6ICcvJywgbmFtZTogJ0xvZ291dCcsIGljb246IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDhiKX1cclxuICAgICAgICBdO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEl0ZW1UYXBwZWQ6ICcgKyBhcmdzKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcmdzKTtcclxuICAgICAgICBpZiAoYXJncyA9PT0gJy8nKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dvdXQnKTtcclxuICAgICAgICAgICAgdGhpcy51c2VyLmxvZ291dCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW2FyZ3NdKTtcclxuICAgICAgICAvLyB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL25vdGlmaWNhdGlvbnNcIl0pO1xyXG4gICAgICAgIC8vICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25vdGlmaWNhdGlvbnMnXSlcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2V0dGluZ3MgaW5pdCcpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=