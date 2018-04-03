Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var ComplaintsComponent = /** @class */ (function () {
    function ComplaintsComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    ComplaintsComponent.prototype.onNavBtnTap = function () {
        // This code will be called only in Android.
        this.routerExtensions.backToPreviousPage();
    };
    ComplaintsComponent = __decorate([
        core_1.Component({
            selector: 'Complaints',
            moduleId: module.id,
            templateUrl: './complaints.component.html'
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions])
    ], ComplaintsComponent);
    return ComplaintsComponent;
}());
exports.ComplaintsComponent = ComplaintsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxhaW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21wbGFpbnRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBQzFDLDZEQUF3RDtBQVF4RDtJQUNJLDZCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7SUFDbkQseUNBQVcsR0FBbEI7UUFDSSw0Q0FBNEM7UUFDN0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDOUMsQ0FBQztJQUxRLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7U0FDN0MsQ0FBQzt5Q0FHd0MsdUNBQWdCO09BRDdDLG1CQUFtQixDQU0vQjtJQUFELDBCQUFDO0NBQUEsQUFORCxJQU1DO0FBTlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnQ29tcGxhaW50cycsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NvbXBsYWludHMuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcGxhaW50c0NvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHt9XHJcbiAgICBwdWJsaWMgb25OYXZCdG5UYXAoKSB7XHJcbiAgICAgICAgLy8gVGhpcyBjb2RlIHdpbGwgYmUgY2FsbGVkIG9ubHkgaW4gQW5kcm9pZC5cclxuICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcclxuICAgIH1cclxufVxyXG4iXX0=