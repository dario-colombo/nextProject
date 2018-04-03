Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DialogService = /** @class */ (function () {
    function DialogService() {
    }
    DialogService.prototype.showDialog = function (message) {
        alert(message);
    };
    DialogService = __decorate([
        core_1.Injectable()
    ], DialogService);
    return DialogService;
}());
exports.DialogService = DialogService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWFsb2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTJDO0FBSzNDO0lBQUE7SUFLRSxDQUFDO0lBSkQsa0NBQVUsR0FBVixVQUFXLE9BQTRCO1FBQ2xDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBSFEsYUFBYTtRQUR6QixpQkFBVSxFQUFFO09BQ0EsYUFBYSxDQUt2QjtJQUFELG9CQUFDO0NBQUEsQUFMSCxJQUtHO0FBTFUsc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEaWFsb2dNZXNzYWdlRm9ybWF0IH0gZnJvbSAnLi8uLi9mcm9udGVuZGNvbW1vbnMvbW9kZWxzL2RpYWxvZ21lc3NhZ2Vmb3JtYXQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGlhbG9nU2VydmljZSB7XHJcbiAgc2hvd0RpYWxvZyhtZXNzYWdlOiBEaWFsb2dNZXNzYWdlRm9ybWF0KSB7XHJcbiAgICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuIl19