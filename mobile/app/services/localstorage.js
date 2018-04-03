Object.defineProperty(exports, "__esModule", { value: true });
var application_settings_1 = require("application-settings");
var CustomlocalStorage = /** @class */ (function () {
    function CustomlocalStorage() {
    }
    CustomlocalStorage.prototype._getString = function (key) {
        return application_settings_1.getString(key);
    };
    CustomlocalStorage.prototype._setString = function (key, value) {
        application_settings_1.setString(key, value);
    };
    CustomlocalStorage.prototype._remove = function (key) {
        application_settings_1.remove(key);
    };
    CustomlocalStorage.prototype._clear = function () {
        application_settings_1.clear();
    };
    return CustomlocalStorage;
}());
exports.CustomlocalStorage = CustomlocalStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxzdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jYWxzdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2REFVOEI7QUFFOUI7SUFBQTtJQWFBLENBQUM7SUFaVSx1Q0FBVSxHQUFqQixVQUFrQixHQUFXO1FBQ3pCLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDTSx1Q0FBVSxHQUFqQixVQUFrQixHQUFXLEVBQUUsS0FBYTtRQUN4QyxnQ0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ00sb0NBQU8sR0FBZCxVQUFlLEdBQVc7UUFDdEIsNkJBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUFJLENBQUM7SUFFZCxtQ0FBTSxHQUFiO1FBQ0ksNEJBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgZ2V0Qm9vbGVhbixcclxuICAgIHNldEJvb2xlYW4sXHJcbiAgICBnZXROdW1iZXIsXHJcbiAgICBzZXROdW1iZXIsXHJcbiAgICBnZXRTdHJpbmcsXHJcbiAgICBzZXRTdHJpbmcsXHJcbiAgICBoYXNLZXksXHJcbiAgICByZW1vdmUsXHJcbiAgICBjbGVhclxyXG59IGZyb20gJ2FwcGxpY2F0aW9uLXNldHRpbmdzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21sb2NhbFN0b3JhZ2Uge1xyXG4gICAgcHVibGljIF9nZXRTdHJpbmcoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nKGtleSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgX3NldFN0cmluZyhrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHNldFN0cmluZyhrZXksIHZhbHVlKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBfcmVtb3ZlKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmVtb3ZlKGtleSk7ICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX2NsZWFyKCkge1xyXG4gICAgICAgIGNsZWFyKCk7XHJcbiAgICB9XHJcbn1cclxuIl19