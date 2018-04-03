Object.defineProperty(exports, "__esModule", { value: true });
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var nativescript_cfalert_dialog_1 = require("nativescript-cfalert-dialog");
var core_1 = require("@angular/core");
var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
        this.cfalertDialog = new nativescript_cfalert_dialog_1.CFAlertDialog();
    }
    NotificationsComponent.prototype.showAlert = function (blur) {
        this.cfalertDialog.show({
            dialogStyle: nativescript_cfalert_dialog_1.CFAlertStyle.ALERT,
            title: "Alert! Run 4 your life! 😱",
            backgroundBlur: blur,
            onDismiss: function () { return console.log("showAlert dismissed"); }
        });
    };
    NotificationsComponent.prototype.showNotification = function () {
        var options = {
            dialogStyle: nativescript_cfalert_dialog_1.CFAlertStyle.NOTIFICATION,
            title: "This is a notification!",
            message: "It is shown at the top of the screen, and the background is blurry (on iOS).",
            backgroundBlur: true,
            onDismiss: function (dialog) { return console.log("Dialog was dismissed: " + dialog); },
            buttons: [{
                    text: "Okay",
                    buttonStyle: nativescript_cfalert_dialog_1.CFAlertActionStyle.POSITIVE,
                    buttonAlignment: nativescript_cfalert_dialog_1.CFAlertActionAlignment.END,
                    textColor: "#eee",
                    backgroundColor: "#888",
                    onClick: function (response) { return console.log("Button pressed: " + response); }
                }]
        };
        this.cfalertDialog.show(options);
    };
    NotificationsComponent.prototype.showBottomSheet = function () {
        var onSelection = function (response) {
            dialogs_1.alert({
                title: "Your selection:",
                message: response,
                okButtonText: "OK"
            });
        };
        var options = {
            dialogStyle: nativescript_cfalert_dialog_1.CFAlertStyle.BOTTOM_SHEET,
            title: "This is a bottom sheet!",
            message: "It is shown at the bottom of the screen",
            buttons: [
                {
                    text: "Okay",
                    buttonStyle: nativescript_cfalert_dialog_1.CFAlertActionStyle.POSITIVE,
                    buttonAlignment: nativescript_cfalert_dialog_1.CFAlertActionAlignment.JUSTIFIED,
                    onClick: onSelection
                },
                {
                    text: "Nope",
                    buttonStyle: nativescript_cfalert_dialog_1.CFAlertActionStyle.NEGATIVE,
                    buttonAlignment: nativescript_cfalert_dialog_1.CFAlertActionAlignment.JUSTIFIED,
                    onClick: onSelection
                }
            ]
        };
        this.cfalertDialog.show(options);
    };
    NotificationsComponent.prototype.showSimpleList = function () {
        var items = ["Tomato", "Potato", "Carrot", "Spinach"];
        var options = {
            dialogStyle: nativescript_cfalert_dialog_1.CFAlertStyle.ALERT,
            title: "This is a simple list!",
            simpleList: {
                items: items,
                onClick: function (dialogInterface, index) {
                    dialogs_1.alert({
                        title: "Your selection:",
                        message: items[index],
                        okButtonText: "OK"
                    });
                }
            }
        };
        this.cfalertDialog.show(options);
    };
    NotificationsComponent.prototype.showSingleChoiceList = function () {
        var items = ["Tomato", "Potato", "Carrot", "Spinach"];
        var selection;
        var options = {
            dialogStyle: nativescript_cfalert_dialog_1.CFAlertStyle.ALERT,
            title: "This is a simple list!",
            singleChoiceList: {
                items: items,
                selectedItem: 2,
                onClick: function (dialog, index) {
                    selection = items[index];
                    console.log("Option selected: " + selection);
                }
            },
            buttons: [
                {
                    text: "Okay",
                    buttonStyle: nativescript_cfalert_dialog_1.CFAlertActionStyle.POSITIVE,
                    buttonAlignment: nativescript_cfalert_dialog_1.CFAlertActionAlignment.END,
                    onClick: function (pressedButton) {
                        dialogs_1.alert({
                            title: "You selected:",
                            message: selection,
                            okButtonText: "OK"
                        });
                    }
                }
            ]
        };
        this.cfalertDialog.show(options);
    };
    NotificationsComponent = __decorate([
        core_1.Component({
            selector: 'Notifications',
            moduleId: module.id,
            templateUrl: './notifications.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());
exports.NotificationsComponent = NotificationsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJub3RpZmljYXRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsdURBQW9EO0FBQ3BELDJFQU9xQztBQUVyQyxzQ0FBMEM7QUFRMUM7SUFHSTtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSwyQ0FBYSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELDBDQUFTLEdBQVQsVUFBVSxJQUFhO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3BCLFdBQVcsRUFBRSwwQ0FBWSxDQUFDLEtBQUs7WUFDL0IsS0FBSyxFQUFFLDRCQUE0QjtZQUNuQyxjQUFjLEVBQUUsSUFBSTtZQUNwQixTQUFTLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsRUFBbEMsQ0FBa0M7U0FDdEQsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGlEQUFnQixHQUFoQjtRQUNJLElBQU0sT0FBTyxHQUFrQjtZQUMzQixXQUFXLEVBQUUsMENBQVksQ0FBQyxZQUFZO1lBQ3RDLEtBQUssRUFBRSx5QkFBeUI7WUFDaEMsT0FBTyxFQUFFLDhFQUE4RTtZQUN2RixjQUFjLEVBQUUsSUFBSTtZQUNwQixTQUFTLEVBQUUsVUFBQSxNQUFNLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUF5QixNQUFRLENBQUMsRUFBOUMsQ0FBOEM7WUFDbkUsT0FBTyxFQUFFLENBQUM7b0JBQ04sSUFBSSxFQUFFLE1BQU07b0JBQ1osV0FBVyxFQUFFLGdEQUFrQixDQUFDLFFBQVE7b0JBQ3hDLGVBQWUsRUFBRSxvREFBc0IsQ0FBQyxHQUFHO29CQUMzQyxTQUFTLEVBQUUsTUFBTTtvQkFDakIsZUFBZSxFQUFFLE1BQU07b0JBQ3ZCLE9BQU8sRUFBRSxVQUFBLFFBQVEsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQW1CLFFBQVUsQ0FBQyxFQUExQyxDQUEwQztpQkFDbEUsQ0FBQztTQUNMLENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsZ0RBQWUsR0FBZjtRQUNJLElBQU0sV0FBVyxHQUFHLFVBQUEsUUFBUTtZQUN4QixlQUFLLENBQUM7Z0JBQ0YsS0FBSyxFQUFFLGlCQUFpQjtnQkFDeEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLFlBQVksRUFBRSxJQUFJO2FBQ3JCLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQztRQUVGLElBQU0sT0FBTyxHQUFrQjtZQUMzQixXQUFXLEVBQUUsMENBQVksQ0FBQyxZQUFZO1lBQ3RDLEtBQUssRUFBRSx5QkFBeUI7WUFDaEMsT0FBTyxFQUFFLHlDQUF5QztZQUNsRCxPQUFPLEVBQUU7Z0JBQ0w7b0JBQ0ksSUFBSSxFQUFFLE1BQU07b0JBQ1osV0FBVyxFQUFFLGdEQUFrQixDQUFDLFFBQVE7b0JBQ3hDLGVBQWUsRUFBRSxvREFBc0IsQ0FBQyxTQUFTO29CQUNqRCxPQUFPLEVBQUUsV0FBVztpQkFDdkI7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFFLE1BQU07b0JBQ1osV0FBVyxFQUFFLGdEQUFrQixDQUFDLFFBQVE7b0JBQ3hDLGVBQWUsRUFBRSxvREFBc0IsQ0FBQyxTQUFTO29CQUNqRCxPQUFPLEVBQUUsV0FBVztpQkFDdkI7YUFBQztTQUNULENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsK0NBQWMsR0FBZDtRQUNJLElBQU0sS0FBSyxHQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDN0QsSUFBTSxPQUFPLEdBQWtCO1lBQzNCLFdBQVcsRUFBRSwwQ0FBWSxDQUFDLEtBQUs7WUFDL0IsS0FBSyxFQUFFLHdCQUF3QjtZQUMvQixVQUFVLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osT0FBTyxFQUFFLFVBQUMsZUFBZSxFQUFFLEtBQUs7b0JBQzVCLGVBQUssQ0FBQzt3QkFDRixLQUFLLEVBQUUsaUJBQWlCO3dCQUN4QixPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQzt3QkFDckIsWUFBWSxFQUFFLElBQUk7cUJBQ3JCLENBQUMsQ0FBQztnQkFDUCxDQUFDO2FBQ0o7U0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHFEQUFvQixHQUFwQjtRQUNJLElBQU0sS0FBSyxHQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDN0QsSUFBSSxTQUFpQixDQUFDO1FBQ3RCLElBQU0sT0FBTyxHQUFrQjtZQUMzQixXQUFXLEVBQUUsMENBQVksQ0FBQyxLQUFLO1lBQy9CLEtBQUssRUFBRSx3QkFBd0I7WUFDL0IsZ0JBQWdCLEVBQUU7Z0JBQ2QsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osWUFBWSxFQUFFLENBQUM7Z0JBQ2YsT0FBTyxFQUFFLFVBQUMsTUFBTSxFQUFFLEtBQUs7b0JBQ25CLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQW9CLFNBQVcsQ0FBQyxDQUFDO2dCQUNqRCxDQUFDO2FBQ0o7WUFDRCxPQUFPLEVBQUU7Z0JBQ0w7b0JBQ0ksSUFBSSxFQUFFLE1BQU07b0JBQ1osV0FBVyxFQUFFLGdEQUFrQixDQUFDLFFBQVE7b0JBQ3hDLGVBQWUsRUFBRSxvREFBc0IsQ0FBQyxHQUFHO29CQUMzQyxPQUFPLEVBQUUsVUFBQyxhQUFxQjt3QkFDM0IsZUFBSyxDQUFDOzRCQUNGLEtBQUssRUFBRSxlQUFlOzRCQUN0QixPQUFPLEVBQUUsU0FBUzs0QkFDbEIsWUFBWSxFQUFFLElBQUk7eUJBQ3JCLENBQUMsQ0FBQztvQkFDUCxDQUFDO2lCQUNKO2FBQ0o7U0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQWxIUSxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1NBQ2hELENBQUM7O09BRVcsc0JBQXNCLENBb0hsQztJQUFELDZCQUFDO0NBQUEsQUFwSEQsSUFvSEM7QUFwSFksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxlcnQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBDRkFsZXJ0RGlhbG9nLFxyXG4gICAgRGlhbG9nT3B0aW9ucyxcclxuICAgIENGQWxlcnRHcmF2aXR5LFxyXG4gICAgQ0ZBbGVydEFjdGlvbkFsaWdubWVudCxcclxuICAgIENGQWxlcnRBY3Rpb25TdHlsZSxcclxuICAgIENGQWxlcnRTdHlsZVxyXG59IGZyb20gXCJuYXRpdmVzY3JpcHQtY2ZhbGVydC1kaWFsb2dcIjtcclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ05vdGlmaWNhdGlvbnMnLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnNDb21wb25lbnQge1xyXG4gICAgcHJpdmF0ZSBjZmFsZXJ0RGlhbG9nOiBDRkFsZXJ0RGlhbG9nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2ZhbGVydERpYWxvZyA9IG5ldyBDRkFsZXJ0RGlhbG9nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0FsZXJ0KGJsdXI6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNmYWxlcnREaWFsb2cuc2hvdyh7XHJcbiAgICAgICAgICAgIGRpYWxvZ1N0eWxlOiBDRkFsZXJ0U3R5bGUuQUxFUlQsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkFsZXJ0ISBSdW4gNCB5b3VyIGxpZmUhIO2gve24sVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQmx1cjogYmx1cixcclxuICAgICAgICAgICAgb25EaXNtaXNzOiAoKSA9PiBjb25zb2xlLmxvZyhcInNob3dBbGVydCBkaXNtaXNzZWRcIilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93Tm90aWZpY2F0aW9uKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IERpYWxvZ09wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGRpYWxvZ1N0eWxlOiBDRkFsZXJ0U3R5bGUuTk9USUZJQ0FUSU9OLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJUaGlzIGlzIGEgbm90aWZpY2F0aW9uIVwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkl0IGlzIHNob3duIGF0IHRoZSB0b3Agb2YgdGhlIHNjcmVlbiwgYW5kIHRoZSBiYWNrZ3JvdW5kIGlzIGJsdXJyeSAob24gaU9TKS5cIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZEJsdXI6IHRydWUsXHJcbiAgICAgICAgICAgIG9uRGlzbWlzczogZGlhbG9nID0+IGNvbnNvbGUubG9nKGBEaWFsb2cgd2FzIGRpc21pc3NlZDogJHtkaWFsb2d9YCksXHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIk9rYXlcIixcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlOiBDRkFsZXJ0QWN0aW9uU3R5bGUuUE9TSVRJVkUsXHJcbiAgICAgICAgICAgICAgICBidXR0b25BbGlnbm1lbnQ6IENGQWxlcnRBY3Rpb25BbGlnbm1lbnQuRU5ELFxyXG4gICAgICAgICAgICAgICAgdGV4dENvbG9yOiBcIiNlZWVcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjODg4XCIsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiByZXNwb25zZSA9PiBjb25zb2xlLmxvZyhgQnV0dG9uIHByZXNzZWQ6ICR7cmVzcG9uc2V9YClcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2ZhbGVydERpYWxvZy5zaG93KG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dCb3R0b21TaGVldCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBvblNlbGVjdGlvbiA9IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiWW91ciBzZWxlY3Rpb246XCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZSxcclxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IERpYWxvZ09wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGRpYWxvZ1N0eWxlOiBDRkFsZXJ0U3R5bGUuQk9UVE9NX1NIRUVULFxyXG4gICAgICAgICAgICB0aXRsZTogXCJUaGlzIGlzIGEgYm90dG9tIHNoZWV0IVwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkl0IGlzIHNob3duIGF0IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlblwiLFxyXG4gICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJPa2F5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU6IENGQWxlcnRBY3Rpb25TdHlsZS5QT1NJVElWRSxcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25BbGlnbm1lbnQ6IENGQWxlcnRBY3Rpb25BbGlnbm1lbnQuSlVTVElGSUVELFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IG9uU2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTm9wZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlOiBDRkFsZXJ0QWN0aW9uU3R5bGUuTkVHQVRJVkUsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uQWxpZ25tZW50OiBDRkFsZXJ0QWN0aW9uQWxpZ25tZW50LkpVU1RJRklFRCxcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBvblNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2ZhbGVydERpYWxvZy5zaG93KG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dTaW1wbGVMaXN0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zOiBhbnkgPSBbXCJUb21hdG9cIiwgXCJQb3RhdG9cIiwgXCJDYXJyb3RcIiwgXCJTcGluYWNoXCJdO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IERpYWxvZ09wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGRpYWxvZ1N0eWxlOiBDRkFsZXJ0U3R5bGUuQUxFUlQsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlRoaXMgaXMgYSBzaW1wbGUgbGlzdCFcIixcclxuICAgICAgICAgICAgc2ltcGxlTGlzdDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IGl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogKGRpYWxvZ0ludGVyZmFjZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIllvdXIgc2VsZWN0aW9uOlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBpdGVtc1tpbmRleF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2ZhbGVydERpYWxvZy5zaG93KG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dTaW5nbGVDaG9pY2VMaXN0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zOiBhbnkgPSBbXCJUb21hdG9cIiwgXCJQb3RhdG9cIiwgXCJDYXJyb3RcIiwgXCJTcGluYWNoXCJdO1xyXG4gICAgICAgIGxldCBzZWxlY3Rpb246IHN0cmluZztcclxuICAgICAgICBjb25zdCBvcHRpb25zOiBEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBkaWFsb2dTdHlsZTogQ0ZBbGVydFN0eWxlLkFMRVJULFxyXG4gICAgICAgICAgICB0aXRsZTogXCJUaGlzIGlzIGEgc2ltcGxlIGxpc3QhXCIsXHJcbiAgICAgICAgICAgIHNpbmdsZUNob2ljZUxpc3Q6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBpdGVtcyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbTogMixcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IChkaWFsb2csIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uID0gaXRlbXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBPcHRpb24gc2VsZWN0ZWQ6ICR7c2VsZWN0aW9ufWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJPa2F5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU6IENGQWxlcnRBY3Rpb25TdHlsZS5QT1NJVElWRSxcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25BbGlnbm1lbnQ6IENGQWxlcnRBY3Rpb25BbGlnbm1lbnQuRU5ELFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6IChwcmVzc2VkQnV0dG9uOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiWW91IHNlbGVjdGVkOlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogc2VsZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNmYWxlcnREaWFsb2cuc2hvdyhvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==