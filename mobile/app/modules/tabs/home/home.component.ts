import { Component, OnInit, Input, Inject, OnDestroy , ElementRef, ViewChild } from '@angular/core';
import { screen } from 'platform';
import { BookingListItem } from '../../../frontendcommons/models/booking';
import { ServerstreamService } from '../../../frontendcommons/services/serverstream/serverstream.service';
import { EventData } from 'data/observable';
import { registerElement } from 'nativescript-angular/element-registry';
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';

registerElement('MapView', () => MapView);

@Component({
    selector: 'Home',
    moduleId: module.id,
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
    serverStream$;
    bookingList;
    colWidth: number;
   // @ViewChild("MapView") mapView: ElementRef;
    latitude =  -33.86;
    longitude = 151.20;
    zoom = 8;
    bearing = 0;
    tilt = 0;
    padding = [40, 40, 40, 40];
    mapView: MapView;

    lastCamera: String;

    constructor( private serverstreamService: ServerstreamService) {}
    onMapReady = (event) => {
        console.log('Map Ready');

        this.mapView = event.object;

        console.log('Setting a marker...');

        let marker = new Marker();
        marker.position = Position.positionFromLatLng(-33.86, 151.20);
        marker.title = 'Sydney';
        marker.snippet = 'Australia';
        marker.userData = {index: 1};
        this.mapView.addMarker(marker);
    }
    onCoordinateTapped(args) {
        console.log('Coordinate Tapped, Lat: ' + args.position.latitude + ', Lon: ' + args.position.longitude, args);
    }

    onMarkerEvent(args) {
        console.log('Marker Event: \'' + args.eventName
            + '\' triggered on: ' + args.marker.title
            + ', Lat: ' + args.marker.position.latitude + ', Lon: ' + args.marker.position.longitude, args);
    }

    onCameraChanged(args) {
        console.log('Camera changed: ' + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);
    }
    ngOnInit() {
       console.log('home init');
        this.colWidth = Math.floor(screen.mainScreen.widthDIPs / 3);
       // this.bookingList = this.serverstreamService.getMessage$();
           this.serverStream$ = this.serverstreamService.getMessageList
                .subscribe(
                    result => this.bookingList = result,
                    error => {
                        console.log('getBookingList error');
                        console.log(error);
                    }
                );
    }
    ngOnDestroy() {
        console.log('home destroy');
      //  this.serverStream$.unsubscribe();
    }
    homeLoaded(event: EventData) {
        console.log('home Loaded');
        console.log(event.object);
    }
    homeUnLoaded(event: EventData) {
        console.log('home unLoaded');
        console.log(event.object);
    }




}
