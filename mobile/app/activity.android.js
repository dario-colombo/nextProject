Object.defineProperty(exports, "__esModule", { value: true });
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var frame_1 = require("ui/frame");
exports.AndroidOnRouteToURL = new ReplaySubject_1.ReplaySubject();
var Activity = /** @class */ (function (_super) {
    __extends(Activity, _super);
    function Activity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Activity.prototype.onCreate = function (savedInstanceState) {
        if (!this._callbacks) {
            frame_1.setActivityCallbacks(this);
        }
        this._callbacks.onCreate(this, savedInstanceState, _super.prototype.onCreate);
        exports.bundle = this;
        console.info('MainActivity.onCreate');
        var creationIntent = this.getIntent();
        this.handleIntent(creationIntent);
    };
    Activity.prototype.onSaveInstanceState = function (outState) {
        this._callbacks.onSaveInstanceState(this, outState, _super.prototype.onSaveInstanceState);
    };
    Activity.prototype.onStart = function () {
        this._callbacks.onStart(this, _super.prototype.onStart);
        console.info("MainActivity.onStart");
    };
    Activity.prototype.onStop = function () {
        this._callbacks.onStop(this, _super.prototype.onStop);
        console.info("MainActivity.onStop");
    };
    Activity.prototype.onDestroy = function () {
        this._callbacks.onDestroy(this, _super.prototype.onDestroy);
        console.info("MainActivity.onDestroy");
    };
    Activity.prototype.onBackPressed = function () {
        this._callbacks.onBackPressed(this, _super.prototype.onBackPressed);
        console.info("MainActivity.onBackPressed");
    };
    Activity.prototype.onRequestPermissionsResult = function (requestCode, permissions, grantResults) {
        console.info("MainActivity.onRequestPermissionsResult " + requestCode);
        this._callbacks.onRequestPermissionsResult(this, requestCode, permissions, grantResults, undefined /*TODO: Enable if needed*/);
    };
    Activity.prototype.onActivityResult = function (requestCode, resultCode, data) {
        console.info("MainActivity.onActivityResult");
        this._callbacks.onActivityResult(this, requestCode, resultCode, data, _super.prototype.onActivityResult);
    };
    Activity.prototype.onNewIntent = function (intent) {
        _super.prototype.onNewIntent.call(this, intent);
        console.info('MainActivity.onNewIntent');
        this.handleIntent(intent);
    };
    Activity.prototype.handleIntent = function (intent) {
        var action = intent.getAction();
        var dataStr = intent.getDataString();
        console.info("MainActivity.handleIntent: [" + action + "] " + dataStr);
        if (action === android.content.Intent.ACTION_VIEW && dataStr !== null) {
            exports.AndroidOnRouteToURL.next(dataStr);
        }
    };
    Activity = __decorate([
        JavaProxy('com.my.company.MainActivity')
    ], Activity);
    return Activity;
}(android.app.Activity));
exports.Activity = Activity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHkuYW5kcm9pZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2aXR5LmFuZHJvaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9EQUFtRDtBQUNuRCxrQ0FBMEU7QUFFL0QsUUFBQSxtQkFBbUIsR0FBRyxJQUFJLDZCQUFhLEVBQVUsQ0FBQztBQUs3RDtJQUE4Qiw0QkFBb0I7SUFBbEQ7O0lBa0VBLENBQUM7SUE5RGEsMkJBQVEsR0FBbEIsVUFBbUIsa0JBQXFDO1FBQ3BELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDbkIsNEJBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRSxpQkFBTSxRQUFRLENBQUMsQ0FBQztRQUVuRSxjQUFNLEdBQUMsSUFBSSxDQUFDO1FBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBR3RDLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFUyxzQ0FBbUIsR0FBN0IsVUFBOEIsUUFBMkI7UUFDckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLGlCQUFNLG1CQUFtQixDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVTLDBCQUFPLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLGlCQUFNLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRVMseUJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsaUJBQU0sTUFBTSxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFUyw0QkFBUyxHQUFuQjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxpQkFBTSxTQUFTLENBQUMsQ0FBQztRQUNqRCxPQUFPLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLGdDQUFhLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLGlCQUFNLGFBQWEsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sNkNBQTBCLEdBQWpDLFVBQWtDLFdBQW1CLEVBQUUsV0FBMEIsRUFBRSxZQUEyQjtRQUMxRyxPQUFPLENBQUMsSUFBSSxDQUFDLDZDQUEyQyxXQUFhLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxTQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUNuSSxDQUFDO0lBRVMsbUNBQWdCLEdBQTFCLFVBQTJCLFdBQW1CLEVBQUUsVUFBa0IsRUFBRSxJQUE0QjtRQUM1RixPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsaUJBQU0sZ0JBQWdCLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBRVMsOEJBQVcsR0FBckIsVUFBc0IsTUFBOEI7UUFDaEQsaUJBQU0sV0FBVyxZQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTywrQkFBWSxHQUFwQixVQUFxQixNQUE4QjtRQUMvQyxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbEMsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUNBQStCLE1BQU0sVUFBSyxPQUFTLENBQUMsQ0FBQztRQUNsRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BFLDJCQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxDQUFDO0lBQ0wsQ0FBQztJQWpFUSxRQUFRO1FBRHBCLFNBQVMsQ0FBQyw2QkFBNkIsQ0FBQztPQUM1QixRQUFRLENBa0VwQjtJQUFELGVBQUM7Q0FBQSxBQWxFRCxDQUE4QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FrRWpEO0FBbEVZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVwbGF5U3ViamVjdCB9IGZyb20gJ3J4anMvUmVwbGF5U3ViamVjdCc7XHJcbmltcG9ydCB7IHNldEFjdGl2aXR5Q2FsbGJhY2tzLCBBbmRyb2lkQWN0aXZpdHlDYWxsYmFja3MgfSBmcm9tICd1aS9mcmFtZSc7XHJcblxyXG5leHBvcnQgbGV0IEFuZHJvaWRPblJvdXRlVG9VUkwgPSBuZXcgUmVwbGF5U3ViamVjdDxzdHJpbmc+KCk7XHJcblxyXG5leHBvcnQgbGV0IGJ1bmRsZTtcclxuXHJcbkBKYXZhUHJveHkoJ2NvbS5teS5jb21wYW55Lk1haW5BY3Rpdml0eScpXHJcbmV4cG9ydCBjbGFzcyBBY3Rpdml0eSBleHRlbmRzIGFuZHJvaWQuYXBwLkFjdGl2aXR5IHtcclxuXHJcbiAgICBwcml2YXRlIF9jYWxsYmFja3M6IEFuZHJvaWRBY3Rpdml0eUNhbGxiYWNrcztcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DcmVhdGUoc2F2ZWRJbnN0YW5jZVN0YXRlOiBhbmRyb2lkLm9zLkJ1bmRsZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5fY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgICAgIHNldEFjdGl2aXR5Q2FsbGJhY2tzKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jYWxsYmFja3Mub25DcmVhdGUodGhpcywgc2F2ZWRJbnN0YW5jZVN0YXRlLCBzdXBlci5vbkNyZWF0ZSk7XHJcblxyXG4gICAgICAgIGJ1bmRsZT10aGlzO1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygnTWFpbkFjdGl2aXR5Lm9uQ3JlYXRlJyk7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBjcmVhdGlvbkludGVudCA9IHRoaXMuZ2V0SW50ZW50KCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVJbnRlbnQoY3JlYXRpb25JbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvblNhdmVJbnN0YW5jZVN0YXRlKG91dFN0YXRlOiBhbmRyb2lkLm9zLkJ1bmRsZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5vblNhdmVJbnN0YW5jZVN0YXRlKHRoaXMsIG91dFN0YXRlLCBzdXBlci5vblNhdmVJbnN0YW5jZVN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25TdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3Mub25TdGFydCh0aGlzLCBzdXBlci5vblN0YXJ0KTtcclxuICAgICAgICBjb25zb2xlLmluZm8oYE1haW5BY3Rpdml0eS5vblN0YXJ0YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uU3RvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3Mub25TdG9wKHRoaXMsIHN1cGVyLm9uU3RvcCk7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKGBNYWluQWN0aXZpdHkub25TdG9wYCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3Mub25EZXN0cm95KHRoaXMsIHN1cGVyLm9uRGVzdHJveSk7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKGBNYWluQWN0aXZpdHkub25EZXN0cm95YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQmFja1ByZXNzZWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLm9uQmFja1ByZXNzZWQodGhpcywgc3VwZXIub25CYWNrUHJlc3NlZCk7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKGBNYWluQWN0aXZpdHkub25CYWNrUHJlc3NlZGApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblJlcXVlc3RQZXJtaXNzaW9uc1Jlc3VsdChyZXF1ZXN0Q29kZTogbnVtYmVyLCBwZXJtaXNzaW9uczogQXJyYXk8U3RyaW5nPiwgZ3JhbnRSZXN1bHRzOiBBcnJheTxudW1iZXI+KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKGBNYWluQWN0aXZpdHkub25SZXF1ZXN0UGVybWlzc2lvbnNSZXN1bHQgJHtyZXF1ZXN0Q29kZX1gKTtcclxuICAgICAgICB0aGlzLl9jYWxsYmFja3Mub25SZXF1ZXN0UGVybWlzc2lvbnNSZXN1bHQodGhpcywgcmVxdWVzdENvZGUsIHBlcm1pc3Npb25zLCBncmFudFJlc3VsdHMsIHVuZGVmaW5lZCAvKlRPRE86IEVuYWJsZSBpZiBuZWVkZWQqLyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uQWN0aXZpdHlSZXN1bHQocmVxdWVzdENvZGU6IG51bWJlciwgcmVzdWx0Q29kZTogbnVtYmVyLCBkYXRhOiBhbmRyb2lkLmNvbnRlbnQuSW50ZW50KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKGBNYWluQWN0aXZpdHkub25BY3Rpdml0eVJlc3VsdGApO1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcy5vbkFjdGl2aXR5UmVzdWx0KHRoaXMsIHJlcXVlc3RDb2RlLCByZXN1bHRDb2RlLCBkYXRhLCBzdXBlci5vbkFjdGl2aXR5UmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25OZXdJbnRlbnQoaW50ZW50OiBhbmRyb2lkLmNvbnRlbnQuSW50ZW50KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIub25OZXdJbnRlbnQoaW50ZW50KTtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ01haW5BY3Rpdml0eS5vbk5ld0ludGVudCcpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlSW50ZW50KGludGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVJbnRlbnQoaW50ZW50OiBhbmRyb2lkLmNvbnRlbnQuSW50ZW50KSB7XHJcbiAgICAgICAgY29uc3QgYWN0aW9uID0gaW50ZW50LmdldEFjdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IGRhdGFTdHIgPSBpbnRlbnQuZ2V0RGF0YVN0cmluZygpO1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhgTWFpbkFjdGl2aXR5LmhhbmRsZUludGVudDogWyR7YWN0aW9ufV0gJHtkYXRhU3RyfWApO1xyXG4gICAgICAgIGlmIChhY3Rpb24gPT09IGFuZHJvaWQuY29udGVudC5JbnRlbnQuQUNUSU9OX1ZJRVcgJiYgZGF0YVN0ciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBBbmRyb2lkT25Sb3V0ZVRvVVJMLm5leHQoZGF0YVN0cik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==