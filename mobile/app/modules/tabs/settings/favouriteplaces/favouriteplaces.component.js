Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ModalPicker = require("nativescript-modal-datetimepicker");
var moment = require("moment");
var temp_person_1 = require("../../../../services/temp_person");
var FavouritePlacesComponent = /** @class */ (function () {
    function FavouritePlacesComponent() {
    }
    FavouritePlacesComponent.prototype.ngOnInit = function () {
        this._ticketOrder = new temp_person_1.TicketOrder();
        this._movies = [];
        this._movies.push(new temp_person_1.Movie(123, 'Zootopia'));
        this._movies.push(new temp_person_1.Movie(217, 'Captain America'));
        this._movies.push(new temp_person_1.Movie(324, 'The Jungle Book'));
        this._movieConverter = new temp_person_1.MovieConverter(this._movies);
    };
    Object.defineProperty(FavouritePlacesComponent.prototype, "person", {
        get: function () {
            return this._ticketOrder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FavouritePlacesComponent.prototype, "movieConverter", {
        get: function () {
            return this._movieConverter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FavouritePlacesComponent.prototype, "movieNames", {
        get: function () {
            if (!this._movieNames) {
                this._movieNames = this.movies.map(function (value) { return value.name; });
            }
            return this._movieNames;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FavouritePlacesComponent.prototype, "movies", {
        get: function () {
            return this._movies;
        },
        enumerable: true,
        configurable: true
    });
    FavouritePlacesComponent.prototype.pickDate = function () {
        var _this = this;
        var picker = new ModalPicker.ModalDatetimepicker();
        picker.pickDate({
            title: 'Please enter your birthday',
            theme: 'dark',
            minDate: new Date(),
            maxDate: moment().add(14, 'days').toDate(),
            is24HourView: true
        }).then(function (result) {
            _this.birthday = result['year'] + '-' + result['month'] + '-' + result['day'];
        }).catch(function (error) {
            console.log('Error: ' + error);
        });
    };
    FavouritePlacesComponent.prototype.pickTime = function () {
        var _this = this;
        var picker = new ModalPicker.ModalDatetimepicker();
        picker.pickTime({
            title: 'Please enter your birthday',
            theme: 'dark',
            /*           minDate: new Date(),
                       maxDate: moment().add(14, 'days').toDate(),*/
            is24HourView: true
        }).then(function (result) {
            _this.time = result['hour'] + '-' + result['minute'];
        }).catch(function (error) {
            console.log('Error: ' + error);
        });
    };
    FavouritePlacesComponent.prototype.onPickerLoaded = function (args) {
        var datePicker = args.object;
        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    };
    FavouritePlacesComponent.prototype.onDateChanged = function (args) {
        console.log('Date changed');
        console.log('New value: ' + args.value);
        console.log('Old value: ' + args.oldValue);
    };
    FavouritePlacesComponent.prototype.onDayChanged = function (args) {
        console.log('Day changed');
        console.log('New value: ' + args.value);
        console.log('Old value: ' + args.oldValue);
    };
    FavouritePlacesComponent.prototype.onMonthChanged = function (args) {
        console.log('Month changed');
        console.log('New value: ' + args.value);
        console.log('Old value: ' + args.oldValue);
    };
    FavouritePlacesComponent.prototype.onYearChanged = function (args) {
        console.log('Year changed');
        console.log('New value: ' + args.value);
        console.log('Old value: ' + args.oldValue);
    };
    FavouritePlacesComponent.prototype.onTimePickerLoaded = function (args) {
        var timePicker = args.object;
        timePicker.hour = 9;
        timePicker.minute = 25;
    };
    FavouritePlacesComponent.prototype.onTimeChanged = function (args) {
        console.log(args.value);
    };
    FavouritePlacesComponent = __decorate([
        core_1.Component({
            selector: 'FavouritePlaces',
            moduleId: module.id,
            templateUrl: './favouriteplaces.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], FavouritePlacesComponent);
    return FavouritePlacesComponent;
}());
exports.FavouritePlacesComponent = FavouritePlacesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF2b3VyaXRlcGxhY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZhdm91cml0ZXBsYWNlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUlsRCwrREFBaUU7QUFDakUsK0JBQWtDO0FBQ2xDLGdFQUFzRjtBQWN0RjtJQU9JO0lBQWUsQ0FBQztJQUVULDJDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1FBRXRDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksbUJBQUssQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLG1CQUFLLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLG1CQUFLLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksNEJBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFNUQsQ0FBQztJQUNELHNCQUFJLDRDQUFNO2FBQVY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLG9EQUFjO2FBQWxCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxnREFBVTthQUFkO1lBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFB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QUFELCtCQUFDO0NBQUEsQUE5R0QsSUE4R0M7QUE5R1ksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ3VpL2RhdGUtcGlja2VyJztcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgVGltZVBpY2tlciB9IGZyb20gJ3VpL3RpbWUtcGlja2VyJztcclxuaW1wb3J0ICogYXMgTW9kYWxQaWNrZXIgZnJvbSAnbmF0aXZlc2NyaXB0LW1vZGFsLWRhdGV0aW1lcGlja2VyJztcclxuaW1wb3J0IG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xyXG5pbXBvcnQgeyBNb3ZpZSwgTW92aWVDb252ZXJ0ZXIsIFRpY2tldE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdGVtcF9wZXJzb24nO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnRmF2b3VyaXRlUGxhY2VzJyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZmF2b3VyaXRlcGxhY2VzLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBGYXZvdXJpdGVQbGFjZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYmlydGhkYXk7XHJcbiAgICB0aW1lO1xyXG4gICAgcHJpdmF0ZSBfdGlja2V0T3JkZXI6IFRpY2tldE9yZGVyO1xyXG4gICAgcHJpdmF0ZSBfbW92aWVDb252ZXJ0ZXI6IE1vdmllQ29udmVydGVyO1xyXG4gICAgcHJpdmF0ZSBfbW92aWVzOiBBcnJheTxNb3ZpZT47XHJcbiAgICBwcml2YXRlIF9tb3ZpZU5hbWVzOiBBcnJheTxTdHJpbmc+O1xyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl90aWNrZXRPcmRlciA9IG5ldyBUaWNrZXRPcmRlcigpO1xyXG5cclxuICAgICAgICB0aGlzLl9tb3ZpZXMgPSBbXTtcclxuICAgICAgICB0aGlzLl9tb3ZpZXMucHVzaChuZXcgTW92aWUoMTIzLCAnWm9vdG9waWEnKSk7XHJcbiAgICAgICAgdGhpcy5fbW92aWVzLnB1c2gobmV3IE1vdmllKDIxNywgJ0NhcHRhaW4gQW1lcmljYScpKTtcclxuICAgICAgICB0aGlzLl9tb3ZpZXMucHVzaChuZXcgTW92aWUoMzI0LCAnVGhlIEp1bmdsZSBCb29rJykpO1xyXG5cclxuICAgICAgICB0aGlzLl9tb3ZpZUNvbnZlcnRlciA9IG5ldyBNb3ZpZUNvbnZlcnRlcih0aGlzLl9tb3ZpZXMpO1xyXG5cclxuICAgIH1cclxuICAgIGdldCBwZXJzb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpY2tldE9yZGVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IG1vdmllQ29udmVydGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb3ZpZUNvbnZlcnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbW92aWVOYW1lcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX21vdmllTmFtZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5fbW92aWVOYW1lcyA9IHRoaXMubW92aWVzLm1hcCgodmFsdWU6IE1vdmllKSA9PiB2YWx1ZS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vdmllTmFtZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vdmllcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW92aWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHBpY2tEYXRlKCkge1xyXG4gICAgICAgIGNvbnN0IHBpY2tlciA9IG5ldyBNb2RhbFBpY2tlci5Nb2RhbERhdGV0aW1lcGlja2VyKCk7XHJcbiAgICAgICAgcGlja2VyLnBpY2tEYXRlKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQbGVhc2UgZW50ZXIgeW91ciBiaXJ0aGRheScsXHJcbiAgICAgICAgICAgIHRoZW1lOiAnZGFyaycsXHJcbiAgICAgICAgICAgIG1pbkRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIG1heERhdGU6IG1vbWVudCgpLmFkZCgxNCwgJ2RheXMnKS50b0RhdGUoKSxcclxuICAgICAgICAgICAgaXMyNEhvdXJWaWV3OiB0cnVlXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYmlydGhkYXkgPSByZXN1bHRbJ3llYXInXSArICctJyArIHJlc3VsdFsnbW9udGgnXSArICctJyArIHJlc3VsdFsnZGF5J107XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogJyArIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHBpY2tUaW1lKCkge1xyXG4gICAgICAgIGNvbnN0IHBpY2tlciA9IG5ldyBNb2RhbFBpY2tlci5Nb2RhbERhdGV0aW1lcGlja2VyKCk7XHJcbiAgICAgICAgcGlja2VyLnBpY2tUaW1lKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQbGVhc2UgZW50ZXIgeW91ciBiaXJ0aGRheScsXHJcbiAgICAgICAgICAgIHRoZW1lOiAnZGFyaycsXHJcbiAgICAgICAgICAgIC8qICAgICAgICAgICBtaW5EYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIG1heERhdGU6IG1vbWVudCgpLmFkZCgxNCwgJ2RheXMnKS50b0RhdGUoKSwqL1xyXG4gICAgICAgICAgICBpczI0SG91clZpZXc6IHRydWVcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50aW1lID0gcmVzdWx0Wydob3VyJ10gKyAnLScgKyByZXN1bHRbJ21pbnV0ZSddIDtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnICsgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25QaWNrZXJMb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPmFyZ3Mub2JqZWN0O1xyXG5cclxuICAgICAgICBkYXRlUGlja2VyLnllYXIgPSAxOTgwO1xyXG4gICAgICAgIGRhdGVQaWNrZXIubW9udGggPSAyO1xyXG4gICAgICAgIGRhdGVQaWNrZXIuZGF5ID0gOTtcclxuICAgICAgICBkYXRlUGlja2VyLm1pbkRhdGUgPSBuZXcgRGF0ZSgxOTc1LCAwLCAyOSk7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5tYXhEYXRlID0gbmV3IERhdGUoMjA0NSwgNCwgMTIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGF0ZUNoYW5nZWQoYXJncykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdEYXRlIGNoYW5nZWQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnTmV3IHZhbHVlOiAnICsgYXJncy52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ09sZCB2YWx1ZTogJyArIGFyZ3Mub2xkVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGF5Q2hhbmdlZChhcmdzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RheSBjaGFuZ2VkJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ05ldyB2YWx1ZTogJyArIGFyZ3MudmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdPbGQgdmFsdWU6ICcgKyBhcmdzLm9sZFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk1vbnRoQ2hhbmdlZChhcmdzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01vbnRoIGNoYW5nZWQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnTmV3IHZhbHVlOiAnICsgYXJncy52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ09sZCB2YWx1ZTogJyArIGFyZ3Mub2xkVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uWWVhckNoYW5nZWQoYXJncykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdZZWFyIGNoYW5nZWQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnTmV3IHZhbHVlOiAnICsgYXJncy52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ09sZCB2YWx1ZTogJyArIGFyZ3Mub2xkVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGltZVBpY2tlckxvYWRlZChhcmdzKSB7XHJcbiAgICAgICAgY29uc3QgdGltZVBpY2tlciA9IDxUaW1lUGlja2VyPmFyZ3Mub2JqZWN0O1xyXG5cclxuICAgICAgICB0aW1lUGlja2VyLmhvdXIgPSA5O1xyXG4gICAgICAgIHRpbWVQaWNrZXIubWludXRlID0gMjU7XHJcbiAgICB9XHJcblxyXG4gICAgb25UaW1lQ2hhbmdlZChhcmdzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYXJncy52YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIl19