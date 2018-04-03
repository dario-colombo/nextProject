
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
const TnsOneSignal = require('nativescript-onesignal').TnsOneSignal;
@Component({
    selector: 'Help',
    moduleId: module.id,
    templateUrl: './help.component.html'
})

export class HelpComponent {
    constructor()
    {
        TnsOneSignal.setSubscription(false);
    }
}
