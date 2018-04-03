import { Component, OnInit, Inject, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActorLoginRequest } from '../../frontendcommons/models/actorlogin';
import { PreLoginRequest } from '../../frontendcommons/models/prelogin';
import { LoginService } from '../../frontendcommons/services/login/login.service';
import { Color } from 'color';
import { connectionType, getConnectionType } from 'connectivity';
import { Animation } from 'ui/animation';
import { View } from 'ui/core/view';
import { prompt } from 'ui/dialogs';
import { AnimationCurve } from 'ui/enums';
import { Page } from 'ui/page';
import { RouterExtensions } from 'nativescript-angular';

@Component({
    selector: 'login',
    moduleId: module.id,
    // template: `<label text="nop"></label>`,
    templateUrl: './login.component.html',
    styleUrls: ['./login-common.css', './login.component.css'],
})
export class LoginComponent implements OnInit, AfterViewInit {
    ActorLoginRequest: ActorLoginRequest;
    PreLoginRequest: PreLoginRequest;
    isLoggingIn = true;
    isAuthenticating = false;
    @ViewChild('password') password: ElementRef;
    @ViewChild('mainContainer') mainContainer: ElementRef;
    @ViewChild('formControls') formControls: ElementRef;

    myanim = [];

    constructor(private loginService: LoginService, private router: RouterExtensions, private page: Page) {
        this.ActorLoginRequest = new ActorLoginRequest();
        this.ActorLoginRequest.Username = '9797971212';
        this.ActorLoginRequest.Password = '1234';
    }

    ngOnInit() {
        this.page.actionBarHidden = true;



    }

    ngAfterViewInit() {
        // Start the progress
        // this.progressRef.start();
    }

    login() {
        this.isAuthenticating = true;
        this.loginService.login(this.ActorLoginRequest)
            .subscribe(response => {
                    this.isAuthenticating = false;
                this.router.navigate(['/'], {clearHistory: true});
                }
                /*,
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
                    console.log('subscrib error')
                    // this goes to the AppError
                     throw error;
                  }

                }*/
            );
    }

    startForegroundAnimation(mainContainer) {
        mainContainer.animate({
            scale: {x: 1.0, y: 1.0},
            opacity: 1,
            duration: 600,
            curve: AnimationCurve.ease
        });

    }

    startFormAnimation(formControls) {
        formControls.animate({
            scale: {x: 1.0, y: 1.0},
            opacity: 1,
            delay: 500,
            duration: 500,
            curve: AnimationCurve.ease
        });

    }

    startBackgroundAnimation(background) {
        background.animate({
            scale: {x: 1.0, y: 1.0},
            opacity: 0.6,
            duration: 1000,
            curve: AnimationCurve.easeInOut
        });
        /*      let mainContainer = <View>this.mainContainer.nativeElement;
              let formControls = <View>this.formControls.nativeElement;
      /!*        mainContainer.style.visibility = "visible";
              formControls.style.visibility = "visible";*!/
            //  this.myanim.push({ target: mainContainer, backgroundColor: new Color("Blue"), opacity: 100,  duration: 10000 });
              this.myanim.push({ target: formControls, backgroundColor: new Color("Blue"), opacity: 100 ,  duration: 10000 });
              new Animation(this.myanim, false)
                  .play()
                  .then(() => {
                  console.log("Animation finished");
              })
                  .catch((e) => {
                      console.log(e.message);
                  })*/
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }

}
