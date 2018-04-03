Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("platform");
var DeviceInfo = /** @class */ (function () {
    function DeviceInfo(model, deviceType, os, osVersion, sdkVersion, language, manufacturer, uuid) {
        this.model = model;
        this.deviceType = deviceType;
        this.os = os;
        this.osVersion = osVersion;
        this.sdkVersion = sdkVersion;
        this.language = language;
        this.manufacturer = manufacturer;
        this.uuid = uuid;
    }
    return DeviceInfo;
}());
// tslint:disable-next-line:max-classes-per-file
var ScreenInfo = /** @class */ (function () {
    function ScreenInfo(heightDIPs, heightPixels, scale, widthDIPs, widthPixels) {
        this.heightDIPs = heightDIPs;
        this.heightPixels = heightPixels;
        this.scale = scale;
        this.widthDIPs = widthDIPs;
        this.widthPixels = widthPixels;
    }
    return ScreenInfo;
}());
// tslint:disable-next-line:no-trailing-whitespace
var DeviceInfoService = /** @class */ (function () {
    function DeviceInfoService() {
        this.isItemVisible = false;
        this.isItemVisibleScreenInfo = false;
        this.deviceInfoButton = 'Show device info';
        this.screenInfoButton = 'Show/Hide screen info';
        this.deviceInformation = new DeviceInfo(platform_1.device.model, platform_1.device.model, platform_1.device.os, platform_1.device.osVersion, platform_1.device.sdkVersion, platform_1.device.language, platform_1.device.manufacturer, platform_1.device.uuid);
        this.screenInformation = new ScreenInfo(platform_1.screen.mainScreen.heightDIPs, platform_1.screen.mainScreen.heightPixels, platform_1.screen.mainScreen.scale, platform_1.screen.mainScreen.widthDIPs, platform_1.screen.mainScreen.widthPixels);
    }
    DeviceInfoService.prototype.checkPlatformType = function (args) {
        var message = '';
        if (platform_1.isAndroid) {
            message = 'You are using Android device';
        }
        else if (platform_1.isIOS) {
            message = 'You are using IOS device';
        }
        alert(message);
    };
    DeviceInfoService.prototype.deviceInfo = function (args) {
        if (this.isItemVisible) {
            this.isItemVisible = false;
            this.deviceInfoButton = 'Show device info';
        }
        else {
            this.isItemVisible = true;
            this.deviceInfoButton = 'Hide device info';
        }
    };
    DeviceInfoService.prototype.screenInfo = function (args) {
        if (this.isItemVisibleScreenInfo) {
            this.isItemVisibleScreenInfo = false;
            this.screenInfoButton = 'Show screen info';
        }
        else {
            this.isItemVisibleScreenInfo = true;
            this.screenInfoButton = 'Hide screen info';
        }
    };
    return DeviceInfoService;
}());
exports.DeviceInfoService = DeviceInfoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2aWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZXZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUNBQTREO0FBQzVEO0lBQ0ksb0JBQ1csS0FBYSxFQUNiLFVBQWtCLEVBQ2xCLEVBQVUsRUFDVixTQUFpQixFQUNqQixVQUFrQixFQUNsQixRQUFnQixFQUNoQixZQUFvQixFQUNwQixJQUFZO1FBUFosVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDbEIsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUNWLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFRO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQVE7SUFDbkIsQ0FBQztJQUNULGlCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFFRCxnREFBZ0Q7QUFDaEQ7SUFDSSxvQkFDVyxVQUFrQixFQUNsQixZQUFvQixFQUNwQixLQUFhLEVBQ2IsU0FBaUIsRUFDakIsV0FBbUI7UUFKbkIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNsQixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUNwQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNqQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtJQUMxQixDQUFDO0lBQ1QsaUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQUNBLGtEQUFrRDtBQUVuRDtJQVNJO1FBUk8sa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsNEJBQXVCLEdBQUcsS0FBSyxDQUFDO1FBR2hDLHFCQUFnQixHQUFHLGtCQUFrQixDQUFDO1FBQ3RDLHFCQUFnQixHQUFHLHVCQUF1QixDQUFDO1FBRzlDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLFVBQVUsQ0FDbkMsaUJBQU0sQ0FBQyxLQUFLLEVBQ1osaUJBQU0sQ0FBQyxLQUFLLEVBQ1osaUJBQU0sQ0FBQyxFQUFFLEVBQ1QsaUJBQU0sQ0FBQyxTQUFTLEVBQ2hCLGlCQUFNLENBQUMsVUFBVSxFQUNqQixpQkFBTSxDQUFDLFFBQVEsRUFDZixpQkFBTSxDQUFDLFlBQVksRUFDbkIsaUJBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxVQUFVLENBQ25DLGlCQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFDNUIsaUJBQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUM5QixpQkFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQ3ZCLGlCQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFDM0IsaUJBQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLDZDQUFpQixHQUF4QixVQUF5QixJQUFJO1FBQ3pCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixFQUFFLENBQUMsQ0FBQyxvQkFBUyxDQUFDLENBQUMsQ0FBQztZQUNaLE9BQU8sR0FBRyw4QkFBOEIsQ0FBQztRQUM3QyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGdCQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2YsT0FBTyxHQUFHLDBCQUEwQixDQUFDO1FBQ3pDLENBQUM7UUFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVNLHNDQUFVLEdBQWpCLFVBQWtCLElBQUk7UUFDbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDO1FBQy9DLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztRQUMvQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLHNDQUFVLEdBQWpCLFVBQWtCLElBQUk7UUFDbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztRQUMvQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztRQUMvQyxDQUFDO0lBQ0wsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQXhERCxJQXdEQztBQXhEWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZXZpY2UsIGlzQW5kcm9pZCwgaXNJT1MsIHNjcmVlbiB9IGZyb20gJ3BsYXRmb3JtJztcclxuY2xhc3MgRGV2aWNlSW5mbyB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgbW9kZWw6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgZGV2aWNlVHlwZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBvczogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBvc1ZlcnNpb246IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgc2RrVmVyc2lvbjogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBsYW5ndWFnZTogc3RyaW5nLFxyXG4gICAgICAgIHB1YmxpYyBtYW51ZmFjdHVyZXI6IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgdXVpZDogc3RyaW5nXHJcbiAgICApIHsgfVxyXG59XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWNsYXNzZXMtcGVyLWZpbGVcclxuY2xhc3MgU2NyZWVuSW5mbyB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgaGVpZ2h0RElQczogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBoZWlnaHRQaXhlbHM6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgc2NhbGU6IG51bWJlcixcclxuICAgICAgICBwdWJsaWMgd2lkdGhESVBzOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIHdpZHRoUGl4ZWxzOiBudW1iZXJcclxuICAgICkgeyB9XHJcbn1cclxuIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby10cmFpbGluZy13aGl0ZXNwYWNlXHJcbiBcclxuZXhwb3J0IGNsYXNzIERldmljZUluZm9TZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBpc0l0ZW1WaXNpYmxlID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZGV2aWNlSW5mb3JtYXRpb246IERldmljZUluZm87XHJcbiAgICBwdWJsaWMgaXNJdGVtVmlzaWJsZVNjcmVlbkluZm8gPSBmYWxzZTtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptZW1iZXItYWNjZXNzXHJcbiAgICBwdWJsaWMgc2NyZWVuSW5mb3JtYXRpb246IFNjcmVlbkluZm87XHJcbiAgICBwdWJsaWMgZGV2aWNlSW5mb0J1dHRvbiA9ICdTaG93IGRldmljZSBpbmZvJztcclxuICAgIHB1YmxpYyBzY3JlZW5JbmZvQnV0dG9uID0gJ1Nob3cvSGlkZSBzY3JlZW4gaW5mbyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VJbmZvcm1hdGlvbiA9IG5ldyBEZXZpY2VJbmZvKFxyXG4gICAgICAgICAgICBkZXZpY2UubW9kZWwsXHJcbiAgICAgICAgICAgIGRldmljZS5tb2RlbCxcclxuICAgICAgICAgICAgZGV2aWNlLm9zLFxyXG4gICAgICAgICAgICBkZXZpY2Uub3NWZXJzaW9uLFxyXG4gICAgICAgICAgICBkZXZpY2Uuc2RrVmVyc2lvbixcclxuICAgICAgICAgICAgZGV2aWNlLmxhbmd1YWdlLFxyXG4gICAgICAgICAgICBkZXZpY2UubWFudWZhY3R1cmVyLFxyXG4gICAgICAgICAgICBkZXZpY2UudXVpZCk7XHJcbiAgICAgICAgdGhpcy5zY3JlZW5JbmZvcm1hdGlvbiA9IG5ldyBTY3JlZW5JbmZvKFxyXG4gICAgICAgICAgICBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzLFxyXG4gICAgICAgICAgICBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRQaXhlbHMsXHJcbiAgICAgICAgICAgIHNjcmVlbi5tYWluU2NyZWVuLnNjYWxlLFxyXG4gICAgICAgICAgICBzY3JlZW4ubWFpblNjcmVlbi53aWR0aERJUHMsXHJcbiAgICAgICAgICAgIHNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hlY2tQbGF0Zm9ybVR5cGUoYXJncykge1xyXG4gICAgICAgIGxldCBtZXNzYWdlID0gJyc7XHJcbiAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xyXG4gICAgICAgICAgICBtZXNzYWdlID0gJ1lvdSBhcmUgdXNpbmcgQW5kcm9pZCBkZXZpY2UnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNJT1MpIHtcclxuICAgICAgICAgICAgbWVzc2FnZSA9ICdZb3UgYXJlIHVzaW5nIElPUyBkZXZpY2UnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGV2aWNlSW5mbyhhcmdzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJdGVtVmlzaWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzSXRlbVZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5kZXZpY2VJbmZvQnV0dG9uID0gJ1Nob3cgZGV2aWNlIGluZm8nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNJdGVtVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGV2aWNlSW5mb0J1dHRvbiA9ICdIaWRlIGRldmljZSBpbmZvJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNjcmVlbkluZm8oYXJncykge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSXRlbVZpc2libGVTY3JlZW5JbmZvKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNJdGVtVmlzaWJsZVNjcmVlbkluZm8gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zY3JlZW5JbmZvQnV0dG9uID0gJ1Nob3cgc2NyZWVuIGluZm8nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNJdGVtVmlzaWJsZVNjcmVlbkluZm8gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjcmVlbkluZm9CdXR0b24gPSAnSGlkZSBzY3JlZW4gaW5mbyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==