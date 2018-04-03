import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ComplaintsComponent } from './complaints/complaints.component';
import { FavouritePlacesComponent } from './favouriteplaces/favouriteplaces.component';
import { HelpComponent } from './help/help.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LanguagesComponent } from './languages/languages.component';
import { MessageCenterComponent } from './messagecenter/messagecenter.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UserProfileComponent } from './userprofile/userprofile.component';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';

const routes: Routes = [
    { path: 'notifications', component: NotificationsComponent },
    { path: 'userprofile', component: UserProfileComponent },
    { path: 'favourite', component: FavouritePlacesComponent },
    { path: 'message', component: MessageCenterComponent },
    { path: 'complaints', component: ComplaintsComponent },
    { path: 'help', component: HelpComponent },
    { path: 'languages', component: LanguagesComponent },
    { path: 'calendar', component: CalendarComponent },
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule.forChild(routes),
        NativeScriptUIListViewModule,
        NativeScriptUIDataFormModule

    ],
    declarations: [
        ComplaintsComponent,
        FavouritePlacesComponent,
        HelpComponent,
        LanguagesComponent,
        MessageCenterComponent,
        NotificationsComponent,
        UserProfileComponent,
        CalendarComponent

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SettingsModule { }
