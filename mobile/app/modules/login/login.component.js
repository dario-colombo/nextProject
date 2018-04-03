Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var actorlogin_1 = require("../../frontendcommons/models/actorlogin");
var login_service_1 = require("../../frontendcommons/services/login/login.service");
var enums_1 = require("ui/enums");
var page_1 = require("ui/page");
var nativescript_angular_1 = require("nativescript-angular");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router, page) {
        this.loginService = loginService;
        this.router = router;
        this.page = page;
        this.isLoggingIn = true;
        this.isAuthenticating = false;
        this.myanim = [];
        this.ActorLoginRequest = new actorlogin_1.ActorLoginRequest();
        this.ActorLoginRequest.Username = '9797971212';
        this.ActorLoginRequest.Password = '1234';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        // Start the progress
        // this.progressRef.start();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.isAuthenticating = true;
        this.loginService.login(this.ActorLoginRequest)
            .subscribe(function (response) {
            _this.isAuthenticating = false;
            _this.router.navigate(['/'], { clearHistory: true });
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
    };
    LoginComponent.prototype.startForegroundAnimation = function (mainContainer) {
        mainContainer.animate({
            scale: { x: 1.0, y: 1.0 },
            opacity: 1,
            duration: 600,
            curve: enums_1.AnimationCurve.ease
        });
    };
    LoginComponent.prototype.startFormAnimation = function (formControls) {
        formControls.animate({
            scale: { x: 1.0, y: 1.0 },
            opacity: 1,
            delay: 500,
            duration: 500,
            curve: enums_1.AnimationCurve.ease
        });
    };
    LoginComponent.prototype.startBackgroundAnimation = function (background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            opacity: 0.6,
            duration: 1000,
            curve: enums_1.AnimationCurve.easeInOut
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
    };
    LoginComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    __decorate([
        core_1.ViewChild('password'),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "password", void 0);
    __decorate([
        core_1.ViewChild('mainContainer'),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "mainContainer", void 0);
    __decorate([
        core_1.ViewChild('formControls'),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "formControls", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            moduleId: module.id,
            // template: `<label text="nop"></label>`,
            templateUrl: './login.component.html',
            styleUrls: ['./login-common.css', './login.component.css'],
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService, nativescript_angular_1.RouterExtensions, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBZ0c7QUFDaEcsc0VBQTRFO0FBRTVFLG9GQUFrRjtBQU1sRixrQ0FBMEM7QUFDMUMsZ0NBQStCO0FBQy9CLDZEQUF3RDtBQVN4RDtJQVdJLHdCQUFvQixZQUEwQixFQUFVLE1BQXdCLEVBQVUsSUFBVTtRQUFoRixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVJwRyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFLekIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUdSLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLDhCQUFpQixFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7UUFDL0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7SUFDN0MsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFJckMsQ0FBQztJQUVELHdDQUFlLEdBQWY7UUFDSSxxQkFBcUI7UUFDckIsNEJBQTRCO0lBQ2hDLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQUEsaUJBMEJDO1FBekJHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2FBQzFDLFNBQVMsQ0FBQyxVQUFBLFFBQVE7WUFDWCxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBaUJHO1NBQ04sQ0FBQztJQUNWLENBQUM7SUFFRCxpREFBd0IsR0FBeEIsVUFBeUIsYUFBYTtRQUNsQyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQ2xCLEtBQUssRUFBRSxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQztZQUN2QixPQUFPLEVBQUUsQ0FBQztZQUNWLFFBQVEsRUFBRSxHQUFHO1lBQ2IsS0FBSyxFQUFFLHNCQUFjLENBQUMsSUFBSTtTQUM3QixDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsMkNBQWtCLEdBQWxCLFVBQW1CLFlBQVk7UUFDM0IsWUFBWSxDQUFDLE9BQU8sQ0FBQztZQUNqQixLQUFLLEVBQUUsRUFBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUM7WUFDdkIsT0FBTyxFQUFFLENBQUM7WUFDVixLQUFLLEVBQUUsR0FBRztZQUNWLFFBQVEsRUFBRSxHQUFHO1lBQ2IsS0FBSyxFQUFFLHNCQUFjLENBQUMsSUFBSTtTQUM3QixDQUFDLENBQUM7SUFFUCxDQUFDO0lBRUQsaURBQXdCLEdBQXhCLFVBQXlCLFVBQVU7UUFDL0IsVUFBVSxDQUFDLE9BQU8sQ0FBQztZQUNmLEtBQUssRUFBRSxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBQztZQUN2QixPQUFPLEVBQUUsR0FBRztZQUNaLFFBQVEsRUFBRSxJQUFJO1lBQ2QsS0FBSyxFQUFFLHNCQUFjLENBQUMsU0FBUztTQUNsQyxDQUFDLENBQUM7UUFDSDs7Ozs7Ozs7Ozs7OztzQkFhYztJQUNsQixDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFsR3NCO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFXLGlCQUFVO29EQUFDO0lBQ2hCO1FBQTNCLGdCQUFTLENBQUMsZUFBZSxDQUFDO2tDQUFnQixpQkFBVTt5REFBQztJQUMzQjtRQUExQixnQkFBUyxDQUFDLGNBQWMsQ0FBQztrQ0FBZSxpQkFBVTt3REFBQztJQVAzQyxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsMENBQTBDO1lBQzFDLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsdUJBQXVCLENBQUM7U0FDN0QsQ0FBQzt5Q0FZb0MsNEJBQVksRUFBa0IsdUNBQWdCLEVBQWdCLFdBQUk7T0FYM0YsY0FBYyxDQXlHMUI7SUFBRCxxQkFBQztDQUFBLEFBekdELElBeUdDO0FBekdZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdG9yTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZnJvbnRlbmRjb21tb25zL21vZGVscy9hY3RvcmxvZ2luJztcclxuaW1wb3J0IHsgUHJlTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi4vLi4vZnJvbnRlbmRjb21tb25zL21vZGVscy9wcmVsb2dpbic7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uLy4uL2Zyb250ZW5kY29tbW9ucy9zZXJ2aWNlcy9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tICdjb2xvcic7XHJcbmltcG9ydCB7IGNvbm5lY3Rpb25UeXBlLCBnZXRDb25uZWN0aW9uVHlwZSB9IGZyb20gJ2Nvbm5lY3Rpdml0eSc7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gJ3VpL2FuaW1hdGlvbic7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd1aS9jb3JlL3ZpZXcnO1xyXG5pbXBvcnQgeyBwcm9tcHQgfSBmcm9tICd1aS9kaWFsb2dzJztcclxuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tICd1aS9lbnVtcyc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsb2dpbicsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgLy8gdGVtcGxhdGU6IGA8bGFiZWwgdGV4dD1cIm5vcFwiPjwvbGFiZWw+YCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9sb2dpbi1jb21tb24uY3NzJywgJy4vbG9naW4uY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gICAgQWN0b3JMb2dpblJlcXVlc3Q6IEFjdG9yTG9naW5SZXF1ZXN0O1xyXG4gICAgUHJlTG9naW5SZXF1ZXN0OiBQcmVMb2dpblJlcXVlc3Q7XHJcbiAgICBpc0xvZ2dpbmdJbiA9IHRydWU7XHJcbiAgICBpc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XHJcbiAgICBAVmlld0NoaWxkKCdwYXNzd29yZCcpIHBhc3N3b3JkOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZCgnbWFpbkNvbnRhaW5lcicpIG1haW5Db250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdmb3JtQ29udHJvbHMnKSBmb3JtQ29udHJvbHM6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgbXlhbmltID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgICAgIHRoaXMuQWN0b3JMb2dpblJlcXVlc3QgPSBuZXcgQWN0b3JMb2dpblJlcXVlc3QoKTtcclxuICAgICAgICB0aGlzLkFjdG9yTG9naW5SZXF1ZXN0LlVzZXJuYW1lID0gJzk3OTc5NzEyMTInO1xyXG4gICAgICAgIHRoaXMuQWN0b3JMb2dpblJlcXVlc3QuUGFzc3dvcmQgPSAnMTIzNCc7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIC8vIFN0YXJ0IHRoZSBwcm9ncmVzc1xyXG4gICAgICAgIC8vIHRoaXMucHJvZ3Jlc3NSZWYuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luKHRoaXMuQWN0b3JMb2dpblJlcXVlc3QpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10sIHtjbGVhckhpc3Rvcnk6IHRydWV9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8qLFxyXG4gICAgICAgICAgICAgICAgKGVycm9yOiBBcHBFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgIC8vIHRocm93IGVycm9yO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgTm90Rm91bmRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdub3QgZm91bmQnKTtcclxuICAgICAgICAgICAgICAgICAgLy8gIGFsZXJ0KCdub3QgZm91ZCcpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgQmFkSW5wdXQpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gIGFsZXJ0KCdiYWQgaW5wdXQgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JhZCBpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm9yaWdpbmFsRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWJzY3JpYiBlcnJvcicpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBnb2VzIHRvIHRoZSBBcHBFcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0Rm9yZWdyb3VuZEFuaW1hdGlvbihtYWluQ29udGFpbmVyKSB7XHJcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2NhbGU6IHt4OiAxLjAsIHk6IDEuMH0sXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAsXHJcbiAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0Rm9ybUFuaW1hdGlvbihmb3JtQ29udHJvbHMpIHtcclxuICAgICAgICBmb3JtQ29udHJvbHMuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjYWxlOiB7eDogMS4wLCB5OiAxLjB9LFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICBkZWxheTogNTAwLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydEJhY2tncm91bmRBbmltYXRpb24oYmFja2dyb3VuZCkge1xyXG4gICAgICAgIGJhY2tncm91bmQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjYWxlOiB7eDogMS4wLCB5OiAxLjB9LFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjYsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZUluT3V0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyogICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IDxWaWV3PnRoaXMubWFpbkNvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgICAgICAgIGxldCBmb3JtQ29udHJvbHMgPSA8Vmlldz50aGlzLmZvcm1Db250cm9scy5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAvISogICAgICAgIG1haW5Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgICAgICAgIGZvcm1Db250cm9scy5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7KiEvXHJcbiAgICAgICAgICAgIC8vICB0aGlzLm15YW5pbS5wdXNoKHsgdGFyZ2V0OiBtYWluQ29udGFpbmVyLCBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcIkJsdWVcIiksIG9wYWNpdHk6IDEwMCwgIGR1cmF0aW9uOiAxMDAwMCB9KTtcclxuICAgICAgICAgICAgICB0aGlzLm15YW5pbS5wdXNoKHsgdGFyZ2V0OiBmb3JtQ29udHJvbHMsIGJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKFwiQmx1ZVwiKSwgb3BhY2l0eTogMTAwICwgIGR1cmF0aW9uOiAxMDAwMCB9KTtcclxuICAgICAgICAgICAgICBuZXcgQW5pbWF0aW9uKHRoaXMubXlhbmltLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQW5pbWF0aW9uIGZpbmlzaGVkXCIpO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgfSkqL1xyXG4gICAgfVxyXG5cclxuICAgIGZvY3VzUGFzc3dvcmQoKSB7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==