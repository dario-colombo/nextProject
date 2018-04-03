import { PropertyConverter } from 'nativescript-ui-dataform';


// >> angular-dataform-converters-code
export class MovieConverter implements PropertyConverter {
    constructor(private _movies: Array<Movie>) { }

    convertFrom(id: number) {
        return this._movies.filter((movie: Movie) => movie.id == id)[0].name;
    }

    convertTo(name: string) {
        return this._movies.filter((movie: Movie) => movie.name == name)[0].id;
    }
}
export class Person {
    public date: string;
    public name: string;
    public age: number;
    public email: string;
    public city: string;
    public street: string;
    public streetNumber: number;

    constructor(date: string, name: string, age: number, email: string, city: string, street: string, streetNumber: number) {
        this.date = date;
        this.name = name;
        this.age = age;
        this.email = email;
        this.city = city;
        this.street = street;
        this.streetNumber = streetNumber;
    }
}

export class TicketOrder {
    public movie = 123;
    public date = '2016-04-06';
    public time = '20:00';
    public type = '2D';
    public price = 9.50;
    public numberOfTickets = 2;
    public contactName: string = null;
    public contactPhone: string = null;
    public contactEmail: string = null;
    public agreeTerms = false;

    constructor() {
    }
}
export class Movie {
    public id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}
