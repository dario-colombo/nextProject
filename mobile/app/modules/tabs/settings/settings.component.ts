import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { UserService } from '../../../services/user.service';


@Component({
    selector: 'Settings',
    moduleId: module.id,
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit {

    myItems: Array<any>;

    constructor(private routerExtensions: RouterExtensions, private user: UserService) {
        this.myItems = [
            {link: 'tabs/notifications', name: 'Notifications setting', icon: String.fromCharCode(0xf0f3)},
            {link: 'tabs/userprofile', name: 'User Profile', icon: String.fromCharCode(0xf21b)},
            {link: 'tabs/calendar', name: 'Calendar', icon: String.fromCharCode(0xf073)},
            {link: 'tabs/favourite', name: 'Favourite Destinations', icon: String.fromCharCode(0xf276)},
            {link: 'tabs/message', name: 'Message', icon: String.fromCharCode(0xf0e0)},
            {link: 'tabs/complaints', name: 'Complaints', icon: String.fromCharCode(0xf044)},
            {link: 'tabs/help', name: 'Help', icon: String.fromCharCode(0xf05a)},
            {link: 'tabs/languages', name: 'Languages', icon: String.fromCharCode(0xf0ac)},
            {link: '/', name: 'Logout', icon: String.fromCharCode(0xf08b)}
        ];

    }

    public onItemTap(args) {
        console.log('------------------------ ItemTapped: ' + args);
        // console.log(args);
        if (args === '/') {
            console.log('logout');
            this.user.logout();
            return;

        }
        this.routerExtensions.navigate([args]);
        // this.routerExtensions.navigate(["/notifications"]);
        //  this.router.navigate(['notifications'])
    }

    ngOnInit(): void {
        console.log('settings init');
    }

}
