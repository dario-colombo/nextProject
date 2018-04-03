
// SYSTEM LIBRARY
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// COMPONENT
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

// MODULES


// PRIVATE SERVICES (if inject here will be singleton)
import { DialogService } from './../services/dialog.service';

// COMMON LIBRARY (if inject here will be singleton)
import { HttpFactory } from './../frontendcommons/factories/http.factory';
import { AppErrorHandler } from './../frontendcommons/errorhandler/app-error-handler';
import { DateInterceptor } from './../frontendcommons/interceptors/date.interceptor';
import { MyHttpInterceptor } from './../frontendcommons/interceptors/http.interceptor';
import { getLocalStorage } from './../frontendcommons/factories/localstorage.factory';
import { LoginService } from './../frontendcommons/services/login/login.service';

import { AuthGuard } from './../frontendcommons/guard/authguard';
import { BookingService } from './../frontendcommons/services/booking/booking.service';
import { UserService } from '../services/user.service';
import { ServerstreamService } from '../frontendcommons/services/serverstream/serverstream.service';
import { ActornotificationService } from '../frontendcommons/services/actornotification/actornotification.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [
    AuthGuard,
    UserService,
    HttpFactory,
    LoginService,
    DialogService,
    BookingService,
    ServerstreamService,
    ActornotificationService,
    { provide: 'LOCALSTORAGE', useFactory: getLocalStorage },
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    },
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
  bootstrap: [AppComponent]
})
export class AppModule { }


