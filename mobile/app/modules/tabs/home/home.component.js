Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var serverstream_service_1 = require("../../../frontendcommons/services/serverstream/serverstream.service");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
element_registry_1.registerElement('MapView', function () { return nativescript_google_maps_sdk_1.MapView; });
var HomeComponent = /** @class */ (function () {
    function HomeComponent(serverstreamService) {
        var _this = this;
        this.serverstreamService = serverstreamService;
        // @ViewChild("MapView") mapView: ElementRef;
        this.latitude = -33.86;
        this.longitude = 151.20;
        this.zoom = 8;
        this.bearing = 0;
        this.tilt = 0;
        this.padding = [40, 40, 40, 40];
        this.onMapReady = function (event) {
            console.log('Map Ready');
            _this.mapView = event.object;
            console.log('Setting a marker...');
            var marker = new nativescript_google_maps_sdk_1.Marker();
            marker.position = nativescript_google_maps_sdk_1.Position.positionFromLatLng(-33.86, 151.20);
            marker.title = 'Sydney';
            marker.snippet = 'Australia';
            marker.userData = { index: 1 };
            _this.mapView.addMarker(marker);
        };
    }
    HomeComponent.prototype.onCoordinateTapped = function (args) {
        console.log('Coordinate Tapped, Lat: ' + args.position.latitude + ', Lon: ' + args.position.longitude, args);
    };
    HomeComponent.prototype.onMarkerEvent = function (args) {
        console.log('Marker Event: \'' + args.eventName
            + '\' triggered on: ' + args.marker.title
            + ', Lat: ' + args.marker.position.latitude + ', Lon: ' + args.marker.position.longitude, args);
    };
    HomeComponent.prototype.onCameraChanged = function (args) {
        console.log('Camera changed: ' + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('home init');
        this.colWidth = Math.floor(platform_1.screen.mainScreen.widthDIPs / 3);
        // this.bookingList = this.serverstreamService.getMessage$();
        this.serverStream$ = this.serverstreamService.getMessageList
            .subscribe(function (result) { return _this.bookingList = result; }, function (error) {
            console.log('getBookingList error');
            console.log(error);
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        console.log('home destroy');
        //  this.serverStream$.unsubscribe();
    };
    HomeComponent.prototype.homeLoaded = function (event) {
        console.log('home Loaded');
        console.log(event.object);
    };
    HomeComponent.prototype.homeUnLoaded = function (event) {
        console.log('home unLoaded');
        console.log(event.object);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'Home',
            moduleId: module.id,
            templateUrl: './home.component.html'
        }),
        __metadata("design:paramtypes", [serverstream_service_1.ServerstreamService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQW9HO0FBQ3BHLHFDQUFrQztBQUVsQyw0R0FBMEc7QUFFMUcsMEVBQXdFO0FBQ3hFLDZFQUF5RTtBQUV6RSxrQ0FBZSxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsc0NBQU8sRUFBUCxDQUFPLENBQUMsQ0FBQztBQU8xQztJQWVJLHVCQUFxQixtQkFBd0M7UUFBN0QsaUJBQWlFO1FBQTVDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFYOUQsNkNBQTZDO1FBQzVDLGFBQVEsR0FBSSxDQUFDLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ25CLFNBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFlBQU8sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBTTNCLGVBQVUsR0FBRyxVQUFDLEtBQUs7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRXpCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFFbkMsSUFBSSxNQUFNLEdBQUcsSUFBSSxxQ0FBTSxFQUFFLENBQUM7WUFDMUIsTUFBTSxDQUFDLFFBQVEsR0FBRyx1Q0FBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzlELE1BQU0sQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBQyxL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RGVzdHJveSAsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBzY3JlZW4gfSBmcm9tICdwbGF0Zm9ybSc7XHJcbmltcG9ydCB7IEJvb2tpbmdMaXN0SXRlbSB9IGZyb20gJy4uLy4uLy4uL2Zyb250ZW5kY29tbW9ucy9tb2RlbHMvYm9va2luZyc7XHJcbmltcG9ydCB7IFNlcnZlcnN0cmVhbVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9mcm9udGVuZGNvbW1vbnMvc2VydmljZXMvc2VydmVyc3RyZWFtL3NlcnZlcnN0cmVhbS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeSc7XHJcbmltcG9ydCB7IE1hcFZpZXcsIE1hcmtlciwgUG9zaXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrJztcclxuXHJcbnJlZ2lzdGVyRWxlbWVudCgnTWFwVmlldycsICgpID0+IE1hcFZpZXcpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ0hvbWUnLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIHNlcnZlclN0cmVhbSQ7XHJcbiAgICBib29raW5nTGlzdDtcclxuICAgIGNvbFdpZHRoOiBudW1iZXI7XHJcbiAgIC8vIEBWaWV3Q2hpbGQoXCJNYXBWaWV3XCIpIG1hcFZpZXc6IEVsZW1lbnRSZWY7XHJcbiAgICBsYXRpdHVkZSA9ICAtMzMuODY7XHJcbiAgICBsb25naXR1ZGUgPSAxNTEuMjA7XHJcbiAgICB6b29tID0gODtcclxuICAgIGJlYXJpbmcgPSAwO1xyXG4gICAgdGlsdCA9IDA7XHJcbiAgICBwYWRkaW5nID0gWzQwLCA0MCwgNDAsIDQwXTtcclxuICAgIG1hcFZpZXc6IE1hcFZpZXc7XHJcblxyXG4gICAgbGFzdENhbWVyYTogU3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHNlcnZlcnN0cmVhbVNlcnZpY2U6IFNlcnZlcnN0cmVhbVNlcnZpY2UpIHt9XHJcbiAgICBvbk1hcFJlYWR5ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01hcCBSZWFkeScpO1xyXG5cclxuICAgICAgICB0aGlzLm1hcFZpZXcgPSBldmVudC5vYmplY3Q7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZXR0aW5nIGEgbWFya2VyLi4uJyk7XHJcblxyXG4gICAgICAgIGxldCBtYXJrZXIgPSBuZXcgTWFya2VyKCk7XHJcbiAgICAgICAgbWFya2VyLnBvc2l0aW9uID0gUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKC0zMy44NiwgMTUxLjIwKTtcclxuICAgICAgICBtYXJrZXIudGl0bGUgPSAnU3lkbmV5JztcclxuICAgICAgICBtYXJrZXIuc25pcHBldCA9ICdBdXN0cmFsaWEnO1xyXG4gICAgICAgIG1hcmtlci51c2VyRGF0YSA9IHtpbmRleDogMX07XHJcbiAgICAgICAgdGhpcy5tYXBWaWV3LmFkZE1hcmtlcihtYXJrZXIpO1xyXG4gICAgfVxyXG4gICAgb25Db29yZGluYXRlVGFwcGVkKGFyZ3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ29vcmRpbmF0ZSBUYXBwZWQsIExhdDogJyArIGFyZ3MucG9zaXRpb24ubGF0aXR1ZGUgKyAnLCBMb246ICcgKyBhcmdzLnBvc2l0aW9uLmxvbmdpdHVkZSwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25NYXJrZXJFdmVudChhcmdzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01hcmtlciBFdmVudDogXFwnJyArIGFyZ3MuZXZlbnROYW1lXHJcbiAgICAgICAgICAgICsgJ1xcJyB0cmlnZ2VyZWQgb246ICcgKyBhcmdzLm1hcmtlci50aXRsZVxyXG4gICAgICAgICAgICArICcsIExhdDogJyArIGFyZ3MubWFya2VyLnBvc2l0aW9uLmxhdGl0dWRlICsgJywgTG9uOiAnICsgYXJncy5tYXJrZXIucG9zaXRpb24ubG9uZ2l0dWRlLCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNhbWVyYUNoYW5nZWQoYXJncykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDYW1lcmEgY2hhbmdlZDogJyArIEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKSwgSlNPTi5zdHJpbmdpZnkoYXJncy5jYW1lcmEpID09PSB0aGlzLmxhc3RDYW1lcmEpO1xyXG4gICAgICAgIHRoaXMubGFzdENhbWVyYSA9IEpTT04uc3RyaW5naWZ5KGFyZ3MuY2FtZXJhKTtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgY29uc29sZS5sb2coJ2hvbWUgaW5pdCcpO1xyXG4gICAgICAgIHRoaXMuY29sV2lkdGggPSBNYXRoLmZsb29yKHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIDMpO1xyXG4gICAgICAgLy8gdGhpcy5ib29raW5nTGlzdCA9IHRoaXMuc2VydmVyc3RyZWFtU2VydmljZS5nZXRNZXNzYWdlJCgpO1xyXG4gICAgICAgICAgIHRoaXMuc2VydmVyU3RyZWFtJCA9IHRoaXMuc2VydmVyc3RyZWFtU2VydmljZS5nZXRNZXNzYWdlTGlzdFxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPT4gdGhpcy5ib29raW5nTGlzdCA9IHJlc3VsdCxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnZXRCb29raW5nTGlzdCBlcnJvcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgIH1cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdob21lIGRlc3Ryb3knKTtcclxuICAgICAgLy8gIHRoaXMuc2VydmVyU3RyZWFtJC51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgaG9tZUxvYWRlZChldmVudDogRXZlbnREYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hvbWUgTG9hZGVkJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQub2JqZWN0KTtcclxuICAgIH1cclxuICAgIGhvbWVVbkxvYWRlZChldmVudDogRXZlbnREYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hvbWUgdW5Mb2FkZWQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC5vYmplY3QpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxufVxyXG4iXX0=