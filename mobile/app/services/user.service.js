Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var localstorage_1 = require("./localstorage");
var nativescript_angular_1 = require("nativescript-angular");
var UserService = /** @class */ (function () {
    function UserService(router) {
        this.router = router;
        // localStorage;
        this.localStorage = new localstorage_1.CustomlocalStorage();
    }
    UserService.prototype.isLoggedIn = function () {
        return !!this.localStorage._getString('token');
    };
    UserService.prototype.logout = function () {
        this.localStorage._remove('token');
        this.router.navigate(['login'], { clearHistory: true });
    };
    Object.defineProperty(UserService.prototype, "token", {
        get: function () {
            return this.localStorage._getString('token');
        },
        set: function (token) {
            this.localStorage._setString('token', token);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "Actor", {
        get: function () {
            if (this.localStorage._getString('Actor')) {
                return JSON.parse(this.localStorage._getString('Actor'));
            }
        },
        set: function (actor) {
            this.localStorage._setString('Actor', JSON.stringify(actor));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "Credentials", {
        get: function () {
            if (this.localStorage._getString('Credentials')) {
                return JSON.parse(this.localStorage._getString('Credentials'));
            }
        },
        set: function (user) {
            this.localStorage._setString('Credentials', JSON.stringify(user));
        },
        enumerable: true,
        configurable: true
    });
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0MsK0NBQW9EO0FBQ3BELDZEQUF3RDtBQU94RDtJQUlJLHFCQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUg3QyxnQkFBZ0I7UUFDZixpQkFBWSxHQUFHLElBQUksaUNBQWtCLEVBQUUsQ0FBQztJQUd4QyxDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELHNCQUFJLDhCQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsQ0FBQzthQUVELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSw4QkFBSzthQUlUO1lBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzdELENBQUM7UUFFTCxDQUFDO2FBVEQsVUFBVSxLQUFZO1lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakUsQ0FBQzs7O09BQUE7SUFRRCxzQkFBSSxvQ0FBVzthQUlmO1lBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ25FLENBQUM7UUFDTCxDQUFDO2FBUkQsVUFBZ0IsSUFBdUI7WUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN0RSxDQUFDOzs7T0FBQTtJQXBDUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBS21CLHVDQUFnQjtPQUpuQyxXQUFXLENBNEN2QjtJQUFELGtCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7QUE1Q1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEN1c3RvbWxvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxzdG9yYWdlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcclxuaW1wb3J0IHsgQWN0b3IsIEFjdG9yTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi8uLi9mcm9udGVuZGNvbW1vbnMvbW9kZWxzL2FjdG9ybG9naW4nO1xyXG5cclxuXHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gICAvLyBsb2NhbFN0b3JhZ2U7XHJcbiAgICBsb2NhbFN0b3JhZ2UgPSBuZXcgQ3VzdG9tbG9jYWxTdG9yYWdlKCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgIH1cclxuXHJcbiAgICBpc0xvZ2dlZEluKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMubG9jYWxTdG9yYWdlLl9nZXRTdHJpbmcoJ3Rva2VuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLl9yZW1vdmUoJ3Rva2VuJyk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydsb2dpbiddLCB7Y2xlYXJIaXN0b3J5OiB0cnVlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRva2VuKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxTdG9yYWdlLl9nZXRTdHJpbmcoJ3Rva2VuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHRva2VuKHRva2VuOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmxvY2FsU3RvcmFnZS5fc2V0U3RyaW5nKCd0b2tlbicsIHRva2VuKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgQWN0b3IoYWN0b3I6IEFjdG9yKSB7XHJcbiAgICAgICAgdGhpcy5sb2NhbFN0b3JhZ2UuX3NldFN0cmluZygnQWN0b3InLCBKU09OLnN0cmluZ2lmeShhY3RvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBBY3RvcigpOiBBY3RvciB7XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxTdG9yYWdlLl9nZXRTdHJpbmcoJ0FjdG9yJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5sb2NhbFN0b3JhZ2UuX2dldFN0cmluZygnQWN0b3InKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHNldCBDcmVkZW50aWFscyh1c2VyOiBBY3RvckxvZ2luUmVxdWVzdCkge1xyXG4gICAgICAgIHRoaXMubG9jYWxTdG9yYWdlLl9zZXRTdHJpbmcoJ0NyZWRlbnRpYWxzJywgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBDcmVkZW50aWFscygpIHtcclxuICAgICAgICBpZiAodGhpcy5sb2NhbFN0b3JhZ2UuX2dldFN0cmluZygnQ3JlZGVudGlhbHMnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmxvY2FsU3RvcmFnZS5fZ2V0U3RyaW5nKCdDcmVkZW50aWFscycpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==