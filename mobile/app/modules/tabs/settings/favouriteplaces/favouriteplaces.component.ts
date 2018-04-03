import { Component, OnInit } from '@angular/core';
import { DatePicker } from 'ui/date-picker';
import { EventData } from 'data/observable';
import { TimePicker } from 'ui/time-picker';
import * as ModalPicker from 'nativescript-modal-datetimepicker';
import moment = require('moment');
import { Movie, MovieConverter, TicketOrder } from '../../../../services/temp_person';



@Component({
    selector: 'FavouritePlaces',
    moduleId: module.id,
    templateUrl: './favouriteplaces.component.html'
})





export class FavouritePlacesComponent implements OnInit {
    birthday;
    time;
    private _ticketOrder: TicketOrder;
    private _movieConverter: MovieConverter;
    private _movies: Array<Movie>;
    private _movieNames: Array<String>;
    constructor() {}

    public ngOnInit() {
        this._ticketOrder = new TicketOrder();

        this._movies = [];
        this._movies.push(new Movie(123, 'Zootopia'));
        this._movies.push(new Movie(217, 'Captain America'));
        this._movies.push(new Movie(324, 'The Jungle Book'));

        this._movieConverter = new MovieConverter(this._movies);

    }
    get person() {
        return this._ticketOrder;
    }
    get movieConverter() {
        return this._movieConverter;
    }

    get movieNames() {
        if (!this._movieNames) {
            this._movieNames = this.movies.map((value: Movie) => value.name);
        }
        return this._movieNames;
    }

    get movies() {
        return this._movies;
    }

    pickDate() {
        const picker = new ModalPicker.ModalDatetimepicker();
        picker.pickDate({
            title: 'Please enter your birthday',
            theme: 'dark',
            minDate: new Date(),
            maxDate: moment().add(14, 'days').toDate(),
            is24HourView: true
        }).then((result) => {
            this.birthday = result['year'] + '-' + result['month'] + '-' + result['day'];
        }).catch((error) => {
            console.log('Error: ' + error);
        });
    }
    pickTime() {
        const picker = new ModalPicker.ModalDatetimepicker();
        picker.pickTime({
            title: 'Please enter your birthday',
            theme: 'dark',
            /*           minDate: new Date(),
                       maxDate: moment().add(14, 'days').toDate(),*/
            is24HourView: true
        }).then((result) => {
            this.time = result['hour'] + '-' + result['minute'] ;
        }).catch((error) => {
            console.log('Error: ' + error);
        });
    }
    onPickerLoaded(args: EventData) {
        const datePicker = <DatePicker>args.object;

        datePicker.year = 1980;
        datePicker.month = 2;
        datePicker.day = 9;
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    }

    onDateChanged(args) {
        console.log('Date changed');
        console.log('New value: ' + args.value);
        console.log('Old value: ' + args.oldValue);
    }

    onDayChanged(args) {
        console.log('Day changed');
        console.log('New value: ' + args.value);
        console.log('Old value: ' + args.oldValue);
    }

    onMonthChanged(args) {
        console.log('Month changed');
        console.log('New value: ' + args.value);
        console.log('Old value: ' + args.oldValue);
    }

    onYearChanged(args) {
        console.log('Year changed');
        console.log('New value: ' + args.value);
        console.log('Old value: ' + args.oldValue);
    }

    onTimePickerLoaded(args) {
        const timePicker = <TimePicker>args.object;

        timePicker.hour = 9;
        timePicker.minute = 25;
    }

    onTimeChanged(args) {
        console.log(args.value);
    }
}
