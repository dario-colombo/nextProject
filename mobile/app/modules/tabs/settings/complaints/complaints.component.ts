import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';

@Component({
    selector: 'Complaints',
    moduleId: module.id,
    templateUrl: './complaints.component.html'
})

export class ComplaintsComponent {
    constructor(private routerExtensions: RouterExtensions) {}
    public onNavBtnTap() {
        // This code will be called only in Android.
       this.routerExtensions.backToPreviousPage();
    }
}
