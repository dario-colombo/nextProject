// SYSTEM LIBRARY
import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA, ErrorHandler } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { Frame } from 'ui/frame';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgShadowModule } from 'nativescript-ng-shadow';
import { NativeScriptLocalizeModule } from 'nativescript-localize/angular';

// COMPONENT
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';

 // MODULES
import { AppRoutingModule } from './app-routing.module';

// PRIVATE SERVICES
import { DeviceInfoService } from './services/device.service';
import { DialogService } from './services/dialog.service';

// COMMON LIBRARY (if inject here will be singleton)
import { AuthGuard } from './frontendcommons/guard/authguard';
import { UserService } from './services/user.service';
import { HttpFactory } from './frontendcommons/factories/http.factory';
import { LoginService } from './frontendcommons/services/login/login.service';
import { AppErrorHandler } from './frontendcommons/errorhandler/app-error-handler';
import { MyHttpInterceptor } from './frontendcommons/interceptors/http.interceptor';
import { DateInterceptor } from './frontendcommons/interceptors/date.interceptor';
import { BookingService } from './frontendcommons/services/booking/booking.service';
import { ServerstreamService } from './frontendcommons/services/serverstream/serverstream.service';
import { ActornotificationService } from './frontendcommons/services/actornotification/actornotification.service';
import { Resolver } from './frontendcommons/services/serverstream/resolver';
import { AddressService } from './frontendcommons/services/address/address.service';



Frame.defaultTransition = { name: 'slide' };

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        NativeScriptFormsModule,
        NgShadowModule,
        NativeScriptLocalizeModule,
    ],
    declarations: [
        AppComponent,
        LoginComponent,
    ],
    providers: [
        AuthGuard,
        UserService,
        HttpFactory,
        LoginService,
        DeviceInfoService,
        DialogService,
        BookingService,
        AddressService,
        ServerstreamService,
        ActornotificationService,
        Resolver,
     /*   {
            provide: ErrorHandler,
            useClass: AppErrorHandler
        },  */
        {
            provide: HTTP_INTERCEPTORS,
            useClass: MyHttpInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: DateInterceptor,
            multi: true
        }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
