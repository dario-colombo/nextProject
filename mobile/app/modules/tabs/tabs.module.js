Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-ui-listview/angular");
var newbooking_component_1 = require("./newbooking/newbooking.component");
var home_component_1 = require("./home/home.component");
var tabs_routing_module_1 = require("./tabs-routing.module");
var tabs_component_1 = require("./tabs.component");
var settings_module_1 = require("./settings/settings.module");
var settings_component_1 = require("./settings/settings.component");
var angular_2 = require("nativescript-localize/angular");
var angular_3 = require("nativescript-ui-dataform/angular");
var angular_4 = require("nativescript-ui-calendar/angular");
var angular_5 = require("nativescript-ui-autocomplete/angular");
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                tabs_routing_module_1.TabsRoutingModule,
                angular_1.NativeScriptUIListViewModule,
                settings_module_1.SettingsModule,
                angular_2.NativeScriptLocalizeModule,
                angular_3.NativeScriptUIDataFormModule,
                angular_4.NativeScriptUICalendarModule,
                angular_5.NativeScriptUIAutoCompleteTextViewModule
            ],
            declarations: [
                tabs_component_1.TabsComponent,
                home_component_1.HomeComponent,
                newbooking_component_1.NewBookingComponent,
                settings_component_1.SettingsComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], TabsModule);
    return TabsModule;
}());
exports.TabsModule = TabsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSw0REFBZ0Y7QUFDaEYsMEVBQXdFO0FBQ3hFLHdEQUFzRDtBQUN0RCw2REFBMEQ7QUFDMUQsbURBQWlEO0FBQ2pELDhEQUE0RDtBQUM1RCxvRUFBa0U7QUFDbEUseURBQTJFO0FBQzNFLDREQUFnRjtBQUNoRiw0REFBZ0Y7QUFDaEYsZ0VBQWdHO0FBMkJoRztJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBckJ0QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qix1Q0FBaUI7Z0JBQ2pCLHNDQUE0QjtnQkFDNUIsZ0NBQWM7Z0JBQ2Qsb0NBQTBCO2dCQUMxQixzQ0FBNEI7Z0JBQzVCLHNDQUE0QjtnQkFDNUIsa0RBQXdDO2FBQzNDO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDhCQUFhO2dCQUNiLDhCQUFhO2dCQUNiLDBDQUFtQjtnQkFDbkIsc0NBQWlCO2FBQ3BCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBOZXdCb29raW5nQ29tcG9uZW50IH0gZnJvbSAnLi9uZXdib29raW5nL25ld2Jvb2tpbmcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYnNSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi90YWJzLXJvdXRpbmcubW9kdWxlJztcclxuaW1wb3J0IHsgVGFic0NvbXBvbmVudCB9IGZyb20gJy4vdGFicy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZXR0aW5nc01vZHVsZSB9IGZyb20gJy4vc2V0dGluZ3Mvc2V0dGluZ3MubW9kdWxlJztcclxuaW1wb3J0IHsgU2V0dGluZ3NDb21wb25lbnQgfSBmcm9tICcuL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdExvY2FsaXplTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWxvY2FsaXplL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBUYWJzUm91dGluZ01vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxyXG4gICAgICAgIFNldHRpbmdzTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdExvY2FsaXplTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSxcclxuICAgICAgICBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgVGFic0NvbXBvbmVudCxcclxuICAgICAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgICAgIE5ld0Jvb2tpbmdDb21wb25lbnQsXHJcbiAgICAgICAgU2V0dGluZ3NDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFic01vZHVsZSB7IH1cclxuIl19