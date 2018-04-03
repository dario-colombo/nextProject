import {
  GetBookingsRequest,
  BookingListItem,
  GetBookingSolution,
  NewBooking
} from './../../frontendcommons/models/booking';
import { BadInput } from './../../frontendcommons/errorhandler/bad-input';
import { NotFoundError } from './../../frontendcommons/errorhandler/not-found-error';
import { AppError } from './../../frontendcommons/errorhandler/app-error';
import { BookingService } from './../../frontendcommons/services/booking/booking.service';
import { Component, OnInit, Inject ,OnDestroy} from '@angular/core';
import { HttpFactory } from './../../frontendcommons/factories/http.factory';

import * as moment from 'moment';
import { UserService } from '../../services/user.service';
import { ServerstreamService } from '../../frontendcommons/services/serverstream/serverstream.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  requestParams: GetBookingsRequest = {
    Limit: 100
  };
  request: GetBookingSolution;

  bookingList: Array<BookingListItem>;
  bookingDeatil;
  new_booking;
  serverStream$;

  constructor(
    @Inject(BookingService) private bookingservice: BookingService,
    @Inject(UserService) private userService: UserService,
    @Inject(ServerstreamService) private serverstreamService: ServerstreamService
  ) {
    this.new_booking = bookingservice.new_booking;
  }

  ngOnInit() {
   // this.getBookings(this.requestParams);
    this.initServerStream();
  }
  ngOnDestroy() {
    console.log('home destroyed');
    this.serverstreamService.destroyServerStream();
  }
  initServerStream() {
  this.serverstreamService.activateServerStream();
 }

  getBookings(params) {
    this.bookingservice.GetBookings(params)
      .subscribe(
        (response: Array<BookingListItem>) => this.bookingList = response
        ,
        (error: AppError) => this.localErrorHandler(error)
      );

  }

  logout() {
    this.userService.logout();
  }

  getSpecificBookings(BookingId) {
    this.bookingservice.GetSpecificBooking(BookingId)
      .subscribe(
        (response) => {
          this.bookingDeatil = response;
          this.new_booking.extra = 'dfdf';
        }
        ,
        (error: AppError) => this.localErrorHandler(error)
      );

  }

  getBookingSolution() {
    // console.log(this.bookingDeatil)
    const prefix = this.bookingDeatil.CurrentBooking;
    this.request = {
      AddressFrom: prefix.AddressStart.AddressId,
      AddressTo: prefix.AddressEnd.AddressId,
      CoTravellers: [],
      Equipment: [],
      LegId: 17712723,
      SeatingType: prefix.SeatingType.SeatingTypeId,
      TicketType: prefix.TicketType.Code,
      TimeType: prefix.TimeType,
      TimeWanted: moment().add(1, 'days').toDate()
    };
    this.bookingservice.GetBookingSolution(this.request)
      .subscribe(
        (response) => {
          console.log(response);

        }
        ,
        (error: AppError) => this.localErrorHandler(error)
      );

  }


  /*
      AddressFrom: number;
      AddressTo: number;
      AssistanceDrop?: number;
      AssistancePickup?: number;
      CoTravellers: Array<Object> = [];
      Equipment: Array<Object> = [];
      LegId: number;
      SeatingType: number;
      TicketType: string;
      TimeType: string;
      TimeWanted: Date;
      */

  localErrorHandler(error) {

    if (error instanceof NotFoundError) {
      console.log('not found');
      //  alert('not foud');
    } else if (error instanceof BadInput) {
      //  alert('bad input ');
      console.log('bad input');
      console.log(error.originalError);
    } else {
      // this goes to the AppErrorHandler implements ErrorHandler
      throw error;
    }

  }

}
