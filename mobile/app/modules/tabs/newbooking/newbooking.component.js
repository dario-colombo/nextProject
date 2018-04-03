Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var address_service_1 = require("../../../frontendcommons/services/address/address.service");
require("rxjs/add/operator/map");
var moment = require("moment");
var ModalPicker = require("nativescript-modal-datetimepicker");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/observable/fromEvent");
var Subject_1 = require("rxjs/Subject");
var NewBookingComponent = /** @class */ (function () {
    function NewBookingComponent(addressService) {
        var _this = this;
        this.addressService = addressService;
        this.skip = false;
        this.searchTerm$ = new Subject_1.Subject();
        this.addressService.search(this.searchTerm$)
            .subscribe(function (result) {
            if (result.length > 0) {
                _this.addresses = result;
                _this.warning = '';
            }
            else {
                _this.addresses = [];
                _this.warning = 'nothing found';
            }
            _this.minchar = '';
        }, function (error) { return console.dir(error); }, function () { return console.log('completed'); });
    }
    NewBookingComponent.prototype.onTextChange = function (keyStr) {
        var _this = this;
        if (keyStr == undefined)
            return;
        if (keyStr.length > 2 && !this.skip) {
            this.searchTerm$.next(keyStr);
        }
        else {
            setTimeout(function () {
                if (!_this.skip) {
                    _this.minchar = '3 chars min';
                }
                _this.skip = false;
                _this.addresses = [];
                _this.warning = '';
            });
        }
        // this.t = textField.text;
    };
    NewBookingComponent.prototype.selectAddress = function (addr) {
        this.selectedAddress = addr.Name;
        this.skip = true;
        this.addresses = [];
        this.minchar = '';
    };
    NewBookingComponent.prototype.pickDate = function () {
        var _this = this;
        var picker = new ModalPicker.ModalDatetimepicker();
        picker.pickDate({
            title: 'Please enter your desired date',
            theme: 'dark',
            minDate: new Date(),
            maxDate: moment().add(14, 'days').toDate(),
            is24HourView: true
        }).then(function (result) {
            _this.departureDate = result['year'] + '-' + result['month'] + '-' + result['day'];
        }).catch(function (error) {
            console.log('Error: ' + error);
        });
    };
    NewBookingComponent.prototype.pickTime = function () {
        var _this = this;
        var picker = new ModalPicker.ModalDatetimepicker();
        picker.pickTime({
            title: 'Please enter your desired time',
            theme: 'dark',
            /*           minDate: new Date(),
                       maxDate: moment().add(14, 'days').toDate(),*/
            is24HourView: true
        }).then(function (result) {
            _this.departureTime = result['hour'] + '-' + result['minute'];
        }).catch(function (error) {
            console.log('Error: ' + error);
        });
    };
    NewBookingComponent = __decorate([
        core_1.Component({
            selector: 'NewBooking',
            moduleId: module.id,
            templateUrl: './newbooking.component.html'
        }),
        __metadata("design:paramtypes", [address_service_1.AddressService])
    ], NewBookingComponent);
    return NewBookingComponent;
}());
exports.NewBookingComponent = NewBookingComponent;
/*export class NewBookingComponent implements OnInit {
    private _items: ObservableArray<TokenModel>;
    private countries = ["Australia", "Albania", "Austria", "Argentina", "Maldives", "Bulgaria", "Belgium", "Cyprus", "Italy", "Japan",
        "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland",
        "Latvia", "Luxembourg", "Macedonia", "Moldova", "Monaco", "Netherlands", "Norway",
        "Poland", "Romania", "Russia", "Sweden", "Slovenia", "Slovakia", "Turkey", "Ukraine",
        "Vatican City", "Chad", "China", "Chile"];
    private _currentEventNumber: number;
    private _eventsText: string;
    private _eventName1: string;
    private _eventName2: string;
    private _eventName3: string;
    private _eventName4: string;
    private _eventName5: string;

    constructor(@Inject(AddressService) private addressService: AddressService) {
        this._items = new ObservableArray<TokenModel>();
        this._currentEventNumber = 0;
        this.updateEventsText();
    }

    ngOnInit() {
        let binder = this.addressService;
        let items: Array<TokenModel> = [];

        this.autocmp.autoCompleteTextView.loadSuggestionsAsync = function (text) {
            var promise = new Promise(function (resolve, reject) {
                http.getJSON("https://www.telerik.com/docs/default-source/ui-for-ios/airports.json?sfvrsn=2").then(function (r: any) {
                    var airportsCollection = r.airports;
                    var items: Array<TokenModel> = new Array();
                    for (var i = 0; i < airportsCollection.length; i++) {
                        items.push(new TokenModel(airportsCollection[i].FIELD2, null));
                    }

                    resolve(items);
                }, function (e) {
                    reject();
                });
            });

            return promise;


         /!*    return new Promise(function (resolve, reject) {
                 //if (text.length<2) resolve('typer');
                return binder.SearchAddress(text).toPromise()
                    .then(
                        function (r: any)
                    {

                    for (var i = 0; i < r.length; i++) {
                        items.push(new TokenModel(r[i].Name, null));
                    }
                    resolve(items);
                },
                        function (e) {
                    reject(e);
                });
            });*!/


        }
    }

    @ViewChild("autocmp") autocmp: RadAutoCompleteTextViewComponent;

    get dataItems(): ObservableArray<TokenModel> {
        return this._items;
    }

    private initDataItems() {


    }

    get eventsText(): string {
        return this._eventsText;
    }

    get eventName1(): string {
        return this._eventName1;
    }

    get eventName2(): string {
        return this._eventName2;
    }

    get eventName3(): string {
        return this._eventName3;
    }

    get eventName4(): string {
        return this._eventName4;
    }

    get eventName5(): string {
        return this._eventName5;
    }

    // >> angular-autocomplete-events
    public onTokenAdded(args) {
        this.logEvent("Added Token: " + args.token.text);
    }

    public onTokenRemoved(args) {
        this.logEvent("Removed Token: " + args.token.text);
    }

    public onTokenSelected(args) {
        this.logEvent("Selected Token: " + args.token.text);
    }

    public onTokenDeselected(args) {
        this.logEvent("Deselected Token: " + args.token.text);
    }

    public onDidAutoComplete(args) {
        this.logEvent("DidAutoComplete with text: " + args.text);
    }

    public onTextChanged(args) {
        this.logEvent("Text Changed: " + args.text);

    }

    public onSuggestionViewBecameVisible(args) {
        this.logEvent("Suggestion View Became Visible");
    }

    // << angular-autocomplete-events
    private updateEventsText(): void {
        var text;
        if (this._currentEventNumber > 5) {
            text = "Latest 5 fired events:";
        } else if (this._currentEventNumber == 0) {
            text = "Events will appear here:";
        } else if (this._currentEventNumber == 1) {
            text = "Fired event:";
        } else {
            text = "Fired events:";
        }
        this._eventsText = text;
    }

    private logEvent(eventText: string) {
        this._currentEventNumber++;
        this.updateEventsText();
        switch (this._currentEventNumber) {
            case 1:
                this._eventName1 = eventText;
                return;
            case 2:
                this._eventName2 = eventText;
                return;
            case 3:
                this._eventName3 = eventText;
                return;
            case 4:
                this._eventName4 = eventText;
                return;
            case 5:
                this._eventName5 = eventText;
                return;
            default:
                this._eventName1 = this.eventName2;
                this._eventName2 = this.eventName3;
                this._eventName3 = this.eventName4;
                this._eventName4 = this.eventName5;
                this._eventName5 = eventText;
        }
    }
}*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3Ym9va2luZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZXdib29raW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWlGO0FBS2pGLDZGQUEyRjtBQUUzRixpQ0FBK0I7QUFHL0IsK0JBQWtDO0FBQ2xDLCtEQUFpRTtBQUNqRSwwQ0FBd0M7QUFFeEMseUNBQXVDO0FBQ3ZDLHdDQUF1QztBQVF2QztJQVdJLDZCQUFvQixjQUE4QjtRQUFsRCxpQkFnQkM7UUFoQm1CLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUpsRCxTQUFJLEdBQVksS0FBSyxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsSUFBSSxpQkFBTyxFQUFVLENBQUM7UUFJaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUN2QyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ1YsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztnQkFDeEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDdEIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUNwQixLQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztZQUNuQyxDQUFDO1lBQ0QsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDdEIsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsRUFDN0IsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQXhCLENBQXdCLENBQ2pDLENBQUE7SUFFVCxDQUFDO0lBRUQsMENBQVksR0FBWixVQUFh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N0MsQ0FBQzt5Q0FZc0MsZ0NBQWM7T0FYekMsbUJBQW1CLENBd0YvQjtJQUFELDBCQUFDO0NBQUEsQUF4RkQsSUF3RkM7QUF4Rlksa0RBQW1CO0FBMEZoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMktHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCwgSW5qZWN0LCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcbmltcG9ydCB7IFRva2VuTW9kZWwgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZVwiO1xyXG5pbXBvcnQgeyBSYWRBdXRvQ29tcGxldGVUZXh0Vmlld0NvbXBvbmVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlL2FuZ3VsYXJcIjtcclxuaW1wb3J0IGh0dHAgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCIpO1xyXG5pbXBvcnQgeyBBZGRyZXNzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2Zyb250ZW5kY29tbW9ucy9zZXJ2aWNlcy9hZGRyZXNzL2FkZHJlc3Muc2VydmljZSc7XHJcbmltcG9ydCB7IEJvb2tpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vZnJvbnRlbmRjb21tb25zL3NlcnZpY2VzL2Jvb2tpbmcvYm9va2luZy5zZXJ2aWNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvdGV4dC1maWVsZCc7XHJcbmltcG9ydCBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcclxuaW1wb3J0ICogYXMgTW9kYWxQaWNrZXIgZnJvbSAnbmF0aXZlc2NyaXB0LW1vZGFsLWRhdGV0aW1lcGlja2VyJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWJvdW5jZVRpbWUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21FdmVudCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdOZXdCb29raW5nJyxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmV3Ym9va2luZy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE5ld0Jvb2tpbmdDb21wb25lbnQge1xyXG4gICAgYWRkcmVzc2VzO1xyXG4gICAgd2FybmluZztcclxuICAgIG1pbmNoYXI7XHJcbiAgICBkZXBhcnR1cmVEYXRlO1xyXG4gICAgZGVwYXJ0dXJlVGltZTtcclxuICAgIHNlbGVjdGVkQWRkcmVzcztcclxuICAgIHNraXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNlYXJjaFRlcm0kID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFkZHJlc3NTZXJ2aWNlOiBBZGRyZXNzU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuYWRkcmVzc1NlcnZpY2Uuc2VhcmNoKHRoaXMuc2VhcmNoVGVybSQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZHJlc3NlcyA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nID0gJ25vdGhpbmcgZm91bmQnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1pbmNoYXIgPSAnJztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUuZGlyKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdjb21wbGV0ZWQnKVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uVGV4dENoYW5nZShrZXlTdHIpIHtcclxuXHJcbiAgICAgICAgaWYgKGtleVN0ciA9PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKGtleVN0ci5sZW5ndGggPiAyICYmICF0aGlzLnNraXApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoVGVybSQubmV4dChrZXlTdHIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuc2tpcCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5taW5jaGFyID0gJzMgY2hhcnMgbWluJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2tpcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRyZXNzZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMud2FybmluZyA9ICcnXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnQgPSB0ZXh0RmllbGQudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RBZGRyZXNzKGFkZHIpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyA9IGFkZHIuTmFtZTtcclxuICAgICAgICB0aGlzLnNraXAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYWRkcmVzc2VzID0gW107XHJcbiAgICAgICAgdGhpcy5taW5jaGFyID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcGlja0RhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgcGlja2VyID0gbmV3IE1vZGFsUGlja2VyLk1vZGFsRGF0ZXRpbWVwaWNrZXIoKTtcclxuICAgICAgICBwaWNrZXIucGlja0RhdGUoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ1BsZWFzZSBlbnRlciB5b3VyIGRlc2lyZWQgZGF0ZScsXHJcbiAgICAgICAgICAgIHRoZW1lOiAnZGFyaycsXHJcbiAgICAgICAgICAgIG1pbkRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgIG1heERhdGU6IG1vbWVudCgpLmFkZCgxNCwgJ2RheXMnKS50b0RhdGUoKSxcclxuICAgICAgICAgICAgaXMyNEhvdXJWaWV3OiB0cnVlXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVwYXJ0dXJlRGF0ZSA9IHJlc3VsdFsneWVhciddICsgJy0nICsgcmVzdWx0Wydtb250aCddICsgJy0nICsgcmVzdWx0WydkYXknXTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnICsgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBpY2tUaW1lKCkge1xyXG4gICAgICAgIGNvbnN0IHBpY2tlciA9IG5ldyBNb2RhbFBpY2tlci5Nb2RhbERhdGV0aW1lcGlja2VyKCk7XHJcbiAgICAgICAgcGlja2VyLnBpY2tUaW1lKHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQbGVhc2UgZW50ZXIgeW91ciBkZXNpcmVkIHRpbWUnLFxyXG4gICAgICAgICAgICB0aGVtZTogJ2RhcmsnLFxyXG4gICAgICAgICAgICAvKiAgICAgICAgICAgbWluRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICBtYXhEYXRlOiBtb21lbnQoKS5hZGQoMTQsICdkYXlzJykudG9EYXRlKCksKi9cclxuICAgICAgICAgICAgaXMyNEhvdXJWaWV3OiB0cnVlXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVwYXJ0dXJlVGltZSA9IHJlc3VsdFsnaG91ciddICsgJy0nICsgcmVzdWx0WydtaW51dGUnXTtcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnICsgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKmV4cG9ydCBjbGFzcyBOZXdCb29raW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByaXZhdGUgX2l0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8VG9rZW5Nb2RlbD47XHJcbiAgICBwcml2YXRlIGNvdW50cmllcyA9IFtcIkF1c3RyYWxpYVwiLCBcIkFsYmFuaWFcIiwgXCJBdXN0cmlhXCIsIFwiQXJnZW50aW5hXCIsIFwiTWFsZGl2ZXNcIiwgXCJCdWxnYXJpYVwiLCBcIkJlbGdpdW1cIiwgXCJDeXBydXNcIiwgXCJJdGFseVwiLCBcIkphcGFuXCIsXHJcbiAgICAgICAgXCJEZW5tYXJrXCIsIFwiRmlubGFuZFwiLCBcIkZyYW5jZVwiLCBcIkdlcm1hbnlcIiwgXCJHcmVlY2VcIiwgXCJIdW5nYXJ5XCIsIFwiSXJlbGFuZFwiLFxyXG4gICAgICAgIFwiTGF0dmlhXCIsIFwiTHV4ZW1ib3VyZ1wiLCBcIk1hY2Vkb25pYVwiLCBcIk1vbGRvdmFcIiwgXCJNb25hY29cIiwgXCJOZXRoZXJsYW5kc1wiLCBcIk5vcndheVwiLFxyXG4gICAgICAgIFwiUG9sYW5kXCIsIFwiUm9tYW5pYVwiLCBcIlJ1c3NpYVwiLCBcIlN3ZWRlblwiLCBcIlNsb3ZlbmlhXCIsIFwiU2xvdmFraWFcIiwgXCJUdXJrZXlcIiwgXCJVa3JhaW5lXCIsXHJcbiAgICAgICAgXCJWYXRpY2FuIENpdHlcIiwgXCJDaGFkXCIsIFwiQ2hpbmFcIiwgXCJDaGlsZVwiXTtcclxuICAgIHByaXZhdGUgX2N1cnJlbnRFdmVudE51bWJlcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZXZlbnRzVGV4dDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfZXZlbnROYW1lMTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfZXZlbnROYW1lMjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfZXZlbnROYW1lMzogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfZXZlbnROYW1lNDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfZXZlbnROYW1lNTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoQWRkcmVzc1NlcnZpY2UpIHByaXZhdGUgYWRkcmVzc1NlcnZpY2U6IEFkZHJlc3NTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5faXRlbXMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5PFRva2VuTW9kZWw+KCk7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudEV2ZW50TnVtYmVyID0gMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUV2ZW50c1RleHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBsZXQgYmluZGVyID0gdGhpcy5hZGRyZXNzU2VydmljZTtcclxuICAgICAgICBsZXQgaXRlbXM6IEFycmF5PFRva2VuTW9kZWw+ID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuYXV0b2NtcC5hdXRvQ29tcGxldGVUZXh0Vmlldy5sb2FkU3VnZ2VzdGlvbnNBc3luYyA9IGZ1bmN0aW9uICh0ZXh0KSB7XHJcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgaHR0cC5nZXRKU09OKFwiaHR0cHM6Ly93d3cudGVsZXJpay5jb20vZG9jcy9kZWZhdWx0LXNvdXJjZS91aS1mb3ItaW9zL2FpcnBvcnRzLmpzb24/c2Z2cnNuPTJcIikudGhlbihmdW5jdGlvbiAocjogYW55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFpcnBvcnRzQ29sbGVjdGlvbiA9IHIuYWlycG9ydHM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW1zOiBBcnJheTxUb2tlbk1vZGVsPiA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWlycG9ydHNDb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2gobmV3IFRva2VuTW9kZWwoYWlycG9ydHNDb2xsZWN0aW9uW2ldLkZJRUxEMiwgbnVsbCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpdGVtcyk7XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcblxyXG5cclxuICAgICAgICAgLyEqICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgLy9pZiAodGV4dC5sZW5ndGg8MikgcmVzb2x2ZSgndHlwZXInKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiaW5kZXIuU2VhcmNoQWRkcmVzcyh0ZXh0KS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAocjogYW55KVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2gobmV3IFRva2VuTW9kZWwocltpXS5OYW1lLCBudWxsKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7KiEvXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQFZpZXdDaGlsZChcImF1dG9jbXBcIikgYXV0b2NtcDogUmFkQXV0b0NvbXBsZXRlVGV4dFZpZXdDb21wb25lbnQ7XHJcblxyXG4gICAgZ2V0IGRhdGFJdGVtcygpOiBPYnNlcnZhYmxlQXJyYXk8VG9rZW5Nb2RlbD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXREYXRhSXRlbXMoKSB7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXQgZXZlbnRzVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudHNUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBldmVudE5hbWUxKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50TmFtZTE7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGV2ZW50TmFtZTIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnROYW1lMjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZXZlbnROYW1lMygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudE5hbWUzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBldmVudE5hbWU0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50TmFtZTQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGV2ZW50TmFtZTUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnROYW1lNTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA+PiBhbmd1bGFyLWF1dG9jb21wbGV0ZS1ldmVudHNcclxuICAgIHB1YmxpYyBvblRva2VuQWRkZWQoYXJncykge1xyXG4gICAgICAgIHRoaXMubG9nRXZlbnQoXCJBZGRlZCBUb2tlbjogXCIgKyBhcmdzLnRva2VuLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblRva2VuUmVtb3ZlZChhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5sb2dFdmVudChcIlJlbW92ZWQgVG9rZW46IFwiICsgYXJncy50b2tlbi50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Ub2tlblNlbGVjdGVkKGFyZ3MpIHtcclxuICAgICAgICB0aGlzLmxvZ0V2ZW50KFwiU2VsZWN0ZWQgVG9rZW46IFwiICsgYXJncy50b2tlbi50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Ub2tlbkRlc2VsZWN0ZWQoYXJncykge1xyXG4gICAgICAgIHRoaXMubG9nRXZlbnQoXCJEZXNlbGVjdGVkIFRva2VuOiBcIiArIGFyZ3MudG9rZW4udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRGlkQXV0b0NvbXBsZXRlKGFyZ3MpIHtcclxuICAgICAgICB0aGlzLmxvZ0V2ZW50KFwiRGlkQXV0b0NvbXBsZXRlIHdpdGggdGV4dDogXCIgKyBhcmdzLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblRleHRDaGFuZ2VkKGFyZ3MpIHtcclxuICAgICAgICB0aGlzLmxvZ0V2ZW50KFwiVGV4dCBDaGFuZ2VkOiBcIiArIGFyZ3MudGV4dCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblN1Z2dlc3Rpb25WaWV3QmVjYW1lVmlzaWJsZShhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5sb2dFdmVudChcIlN1Z2dlc3Rpb24gVmlldyBCZWNhbWUgVmlzaWJsZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA8PCBhbmd1bGFyLWF1dG9jb21wbGV0ZS1ldmVudHNcclxuICAgIHByaXZhdGUgdXBkYXRlRXZlbnRzVGV4dCgpOiB2b2lkIHtcclxuICAgICAgICB2YXIgdGV4dDtcclxuICAgICAgICBpZiAodGhpcy5fY3VycmVudEV2ZW50TnVtYmVyID4gNSkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gXCJMYXRlc3QgNSBmaXJlZCBldmVudHM6XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jdXJyZW50RXZlbnROdW1iZXIgPT0gMCkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gXCJFdmVudHMgd2lsbCBhcHBlYXIgaGVyZTpcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2N1cnJlbnRFdmVudE51bWJlciA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSBcIkZpcmVkIGV2ZW50OlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRleHQgPSBcIkZpcmVkIGV2ZW50czpcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzVGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2dFdmVudChldmVudFRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRFdmVudE51bWJlcisrO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRXZlbnRzVGV4dCgpO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fY3VycmVudEV2ZW50TnVtYmVyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50TmFtZTEgPSBldmVudFRleHQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50TmFtZTIgPSBldmVudFRleHQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50TmFtZTMgPSBldmVudFRleHQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50TmFtZTQgPSBldmVudFRleHQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50TmFtZTUgPSBldmVudFRleHQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudE5hbWUxID0gdGhpcy5ldmVudE5hbWUyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnROYW1lMiA9IHRoaXMuZXZlbnROYW1lMztcclxuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50TmFtZTMgPSB0aGlzLmV2ZW50TmFtZTQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ldmVudE5hbWU0ID0gdGhpcy5ldmVudE5hbWU1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnROYW1lNSA9IGV2ZW50VGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0qL1xyXG4iXX0=