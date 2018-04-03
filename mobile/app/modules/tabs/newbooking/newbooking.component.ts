import { Component, ViewChild, OnInit, Inject, ElementRef } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { TokenModel } from "nativescript-ui-autocomplete";
import { RadAutoCompleteTextViewComponent } from "nativescript-ui-autocomplete/angular";
import http = require("tns-core-modules/http");
import { AddressService } from '../../../frontendcommons/services/address/address.service';
import { BookingService } from '../../../frontendcommons/services/booking/booking.service';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operator/map';
import { TextField } from 'tns-core-modules/ui/text-field';
import moment = require('moment');
import * as ModalPicker from 'nativescript-modal-datetimepicker';
import 'rxjs/add/operator/debounceTime';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { Subject } from 'rxjs/Subject';


@Component({
    selector: 'NewBooking',
    moduleId: module.id,
    templateUrl: './newbooking.component.html'
})
export class NewBookingComponent {
    addresses;
    warning;
    minchar;
    departureDate;
    departureTime;
    selectedAddress;
    skip: boolean = false;
    searchTerm$ = new Subject<string>();


    constructor(private addressService: AddressService) {
        this.addressService.search(this.searchTerm$)
            .subscribe((result) => {
                    if (result.length > 0) {
                        this.addresses = result;
                        this.warning = '';
                    } else {
                        this.addresses = [];
                        this.warning = 'nothing found';
                    }
                    this.minchar = '';
                },
                (error) => console.dir(error),
                () => console.log('completed')
            )

    }

    onTextChange(keyStr) {

        if (keyStr == undefined) return;

        if (keyStr.length > 2 && !this.skip) {

            this.searchTerm$.next(keyStr)
        }
        else {
            setTimeout(()=>{

                if(!this.skip){
                    this.minchar = '3 chars min';
                }
                this.skip = false;
                this.addresses = [];
                this.warning = ''
            })

        }
        // this.t = textField.text;
    }

    selectAddress(addr) {
        this.selectedAddress = addr.Name;
        this.skip = true;
        this.addresses = [];
        this.minchar = '';
    }

    pickDate() {
        const picker = new ModalPicker.ModalDatetimepicker();
        picker.pickDate({
            title: 'Please enter your desired date',
            theme: 'dark',
            minDate: new Date(),
            maxDate: moment().add(14, 'days').toDate(),
            is24HourView: true
        }).then((result) => {
            this.departureDate = result['year'] + '-' + result['month'] + '-' + result['day'];
        }).catch((error) => {
            console.log('Error: ' + error);
        });
    }

    pickTime() {
        const picker = new ModalPicker.ModalDatetimepicker();
        picker.pickTime({
            title: 'Please enter your desired time',
            theme: 'dark',
            /*           minDate: new Date(),
                       maxDate: moment().add(14, 'days').toDate(),*/
            is24HourView: true
        }).then((result) => {
            this.departureTime = result['hour'] + '-' + result['minute'];
        }).catch((error) => {
            console.log('Error: ' + error);
        });
    }
}

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
