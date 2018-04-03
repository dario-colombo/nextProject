
import { Component, OnInit, Inject } from '@angular/core';
import { AppError } from './../../frontendcommons/errorhandler/app-error';
import { NotFoundError } from './../../frontendcommons/errorhandler/not-found-error';
import { BadInput } from './../../frontendcommons/errorhandler/bad-input';
import { LoginService } from './../../frontendcommons/services/login/login.service';
import { ActorLoginRequest } from './../../frontendcommons/models/actorlogin';
import { PreLoginRequest } from './../../frontendcommons/models/prelogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  ActorLoginRequest: ActorLoginRequest;
  PreLoginRequest: PreLoginRequest;

  constructor(@Inject(LoginService) private loginservice: LoginService, private router: Router) {
    this.ActorLoginRequest = new ActorLoginRequest();
    this.ActorLoginRequest.Username = '0001010011';
    this.ActorLoginRequest.Password = '1234';
  }

  login() {
    this.loginservice.login(this.ActorLoginRequest)
      .subscribe(response => this.router.navigate(['/'])
      ,
      (error: AppError) => {
       // throw error;

        if (error instanceof NotFoundError) {
          console.log('not found');
        //  alert('not foud');
        } else if (error instanceof BadInput) {
        //  alert('bad input ');
          console.log('bad input');
          console.log(error.originalError);
        } else {
          /// this goes to the AppErrorHandler implements ErrorHandler
           throw error;
        }

      });
  }

}
