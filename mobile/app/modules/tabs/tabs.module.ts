import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { NewBookingComponent } from './newbooking/newbooking.component';
import { HomeComponent } from './home/home.component';
import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { SettingsModule } from './settings/settings.module';
import { SettingsComponent } from './settings/settings.component';
import { NativeScriptLocalizeModule } from 'nativescript-localize/angular';
import { NativeScriptUIDataFormModule } from 'nativescript-ui-dataform/angular';
import { NativeScriptUICalendarModule } from 'nativescript-ui-calendar/angular';
import { NativeScriptUIAutoCompleteTextViewModule } from 'nativescript-ui-autocomplete/angular';





@NgModule({
    imports: [
        NativeScriptCommonModule,
        TabsRoutingModule,
        NativeScriptUIListViewModule,
        SettingsModule,
        NativeScriptLocalizeModule,
        NativeScriptUIDataFormModule,
        NativeScriptUICalendarModule,
        NativeScriptUIAutoCompleteTextViewModule
    ],
    declarations: [
        TabsComponent,
        HomeComponent,
        NewBookingComponent,
        SettingsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class TabsModule { }
