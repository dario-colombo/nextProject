Object.defineProperty(exports, "__esModule", { value: true });
// >> angular-dataform-converters-code
var MovieConverter = /** @class */ (function () {
    function MovieConverter(_movies) {
        this._movies = _movies;
    }
    MovieConverter.prototype.convertFrom = function (id) {
        return this._movies.filter(function (movie) { return movie.id == id; })[0].name;
    };
    MovieConverter.prototype.convertTo = function (name) {
        return this._movies.filter(function (movie) { return movie.name == name; })[0].id;
    };
    return MovieConverter;
}());
exports.MovieConverter = MovieConverter;
var Person = /** @class */ (function () {
    function Person(date, name, age, email, city, street, streetNumber) {
        this.date = date;
        this.name = name;
        this.age = age;
        this.email = email;
        this.city = city;
        this.street = street;
        this.streetNumber = streetNumber;
    }
    return Person;
}());
exports.Person = Person;
var TicketOrder = /** @class */ (function () {
    function TicketOrder() {
        this.movie = 123;
        this.date = '2016-04-06';
        this.time = '20:00';
        this.type = '2D';
        this.price = 9.50;
        this.numberOfTickets = 2;
        this.contactName = null;
        this.contactPhone = null;
        this.contactEmail = null;
        this.agreeTerms = false;
    }
    return TicketOrder;
}());
exports.TicketOrder = TicketOrder;
var Movie = /** @class */ (function () {
    function Movie(id, name) {
        this.id = id;
        this.name = name;
    }
    return Movie;
}());
exports.Movie = Movie;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcF9wZXJzb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZW1wX3BlcnNvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0Esc0NBQXNDO0FBQ3RDO0lBQ0ksd0JBQW9CLE9BQXFCO1FBQXJCLFlBQU8sR0FBUCxPQUFPLENBQWM7SUFBSSxDQUFDO0lBRTlDLG9DQUFXLEdBQVgsVUFBWSxFQUFVO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN6RSxDQUFDO0lBRUQsa0NBQVMsR0FBVCxVQUFVLElBQVk7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQWxCLENBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDM0UsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSx3Q0FBYztBQVczQjtJQVNJLGdCQUFZLElBQVksRUFBRSxJQUFZLEVBQUUsR0FBVyxFQUFFLEtBQWEsRUFBRSxJQUFZLEVBQUUsTUFBYyxFQUFFLFlBQW9CO1FBQ2xILElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDckMsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDO0FBbEJZLHdCQUFNO0FBb0JuQjtJQVlJO1FBWE8sVUFBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLFNBQUksR0FBRyxZQUFZLENBQUM7UUFDcEIsU0FBSSxHQUFHLE9BQU8sQ0FBQztRQUNmLFNBQUksR0FBRyxJQUFJLENBQUM7UUFDWixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2Isb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIsZ0JBQVcsR0FBVyxJQUFJLENBQUM7UUFDM0IsaUJBQVksR0FBVyxJQUFJLENBQUM7UUFDNUIsaUJBQVksR0FBVyxJQUFJLENBQUM7UUFDNUIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUcxQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBZEQsSUFjQztBQWRZLGtDQUFXO0FBZXhCO0lBSUksZUFBWSxFQUFVLEVBQUUsSUFBWTtRQUNoQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3BlcnR5Q29udmVydGVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtJztcclxuXHJcblxyXG4vLyA+PiBhbmd1bGFyLWRhdGFmb3JtLWNvbnZlcnRlcnMtY29kZVxyXG5leHBvcnQgY2xhc3MgTW92aWVDb252ZXJ0ZXIgaW1wbGVtZW50cyBQcm9wZXJ0eUNvbnZlcnRlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9tb3ZpZXM6IEFycmF5PE1vdmllPikgeyB9XHJcblxyXG4gICAgY29udmVydEZyb20oaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb3ZpZXMuZmlsdGVyKChtb3ZpZTogTW92aWUpID0+IG1vdmllLmlkID09IGlkKVswXS5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRUbyhuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW92aWVzLmZpbHRlcigobW92aWU6IE1vdmllKSA9PiBtb3ZpZS5uYW1lID09IG5hbWUpWzBdLmlkO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBQZXJzb24ge1xyXG4gICAgcHVibGljIGRhdGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgYWdlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZW1haWw6IHN0cmluZztcclxuICAgIHB1YmxpYyBjaXR5OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3RyZWV0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3RyZWV0TnVtYmVyOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGF0ZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGFnZTogbnVtYmVyLCBlbWFpbDogc3RyaW5nLCBjaXR5OiBzdHJpbmcsIHN0cmVldDogc3RyaW5nLCBzdHJlZXROdW1iZXI6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmFnZSA9IGFnZTtcclxuICAgICAgICB0aGlzLmVtYWlsID0gZW1haWw7XHJcbiAgICAgICAgdGhpcy5jaXR5ID0gY2l0eTtcclxuICAgICAgICB0aGlzLnN0cmVldCA9IHN0cmVldDtcclxuICAgICAgICB0aGlzLnN0cmVldE51bWJlciA9IHN0cmVldE51bWJlcjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpY2tldE9yZGVyIHtcclxuICAgIHB1YmxpYyBtb3ZpZSA9IDEyMztcclxuICAgIHB1YmxpYyBkYXRlID0gJzIwMTYtMDQtMDYnO1xyXG4gICAgcHVibGljIHRpbWUgPSAnMjA6MDAnO1xyXG4gICAgcHVibGljIHR5cGUgPSAnMkQnO1xyXG4gICAgcHVibGljIHByaWNlID0gOS41MDtcclxuICAgIHB1YmxpYyBudW1iZXJPZlRpY2tldHMgPSAyO1xyXG4gICAgcHVibGljIGNvbnRhY3ROYW1lOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIGNvbnRhY3RQaG9uZTogc3RyaW5nID0gbnVsbDtcclxuICAgIHB1YmxpYyBjb250YWN0RW1haWw6IHN0cmluZyA9IG51bGw7XHJcbiAgICBwdWJsaWMgYWdyZWVUZXJtcyA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBNb3ZpZSB7XHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcbn1cclxuIl19