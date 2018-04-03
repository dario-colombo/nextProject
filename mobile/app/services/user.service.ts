import { Injectable } from '@angular/core';
import { CustomlocalStorage } from './localstorage';
import { RouterExtensions } from 'nativescript-angular';
import { Actor, ActorLoginRequest } from './../frontendcommons/models/actorlogin';




@Injectable()
export class UserService {
   // localStorage;
    localStorage = new CustomlocalStorage();

    constructor(private router: RouterExtensions) {
    }

    isLoggedIn() {
        return !!this.localStorage._getString('token');
    }

    logout() {
        this.localStorage._remove('token');
        this.router.navigate(['login'], {clearHistory: true});
    }

    get token(): string {
        return this.localStorage._getString('token');
    }

    set token(token: string) {
        this.localStorage._setString('token', token);
    }

    set Actor(actor: Actor) {
        this.localStorage._setString('Actor', JSON.stringify(actor));
    }

    get Actor(): Actor {
        if (this.localStorage._getString('Actor')) {
            return JSON.parse(this.localStorage._getString('Actor'));
        }

    }
    set Credentials(user: ActorLoginRequest) {
        this.localStorage._setString('Credentials', JSON.stringify(user));
    }

    get Credentials() {
        if (this.localStorage._getString('Credentials')) {
            return JSON.parse(this.localStorage._getString('Credentials'));
        }
    }

}
