import { CustomlocalStorage } from './localstorage';
import { Inject, Injectable } from '@angular/core';
import { Actor, ActorLoginRequest } from '../frontendcommons/models/actorlogin';
import { Router } from '@angular/router';
import { ServerstreamService } from '../frontendcommons/services/serverstream/serverstream.service';


@Injectable()
export class UserService {

  localstorage = new CustomlocalStorage();

  constructor(@Inject(Router) private router: Router) {
  }

  bootstrapDevice() {
    if (!this.MagicString) {
      this.MagicString = this.randomString(64);
    } else {
      console.log('try to login with deviceId AND MAGIC');
    }
  }
  randomString(length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  isLoggedIn() {
    return !!this.localstorage._getString('token');
  }

  logout() {
    this.localstorage._remove('token');
    // this.serverStream.destroyServerStream();
    this.router.navigate(['login']);
  }

  get token(): string {
    return this.localstorage._getString('token');
  }

  set MagicString(token: string) {
    this.localstorage._setString('MagicString', token);
  }

  get MagicString() {
    return this.localstorage._getString('MagicString');
  }

  set token(token: string) {
    this.localstorage._setString('token', token);
  }

  set Credentials(user: ActorLoginRequest) {
    this.localstorage._setString('Credentials', JSON.stringify(user));
  }

  get Credentials() {
    if (this.localstorage._getString('Credentials')) {
      return JSON.parse(this.localstorage._getString('Credentials'));
    }
  }

  set Actor(actor: Actor) {
    this.localstorage._setString('Actor', JSON.stringify(actor));
  }

  get Actor(): Actor {
    if (this.localstorage._getString('Actor')) {
      return JSON.parse(this.localstorage._getString('Actor'));
    }

  }
}
