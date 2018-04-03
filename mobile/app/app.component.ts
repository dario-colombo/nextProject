import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { isAndroid, isIOS, screen } from 'platform';
let OnRouteToURL: ReplaySubject<string>;

if (isIOS) {
    const { CustomAppDelegate, iOSOnRouteToURL } = require('./delegate');
    application.ios.delegate = CustomAppDelegate;
    OnRouteToURL = iOSOnRouteToURL;
} else if (isAndroid) {
    OnRouteToURL = require('./activity').AndroidOnRouteToURL;
}

@Component({
    selector: 'ns-app',
    templateUrl: 'app.component.html',
    moduleId: module.id
})
export class AppComponent implements OnInit {

    constructor() {
        OnRouteToURL.subscribe((url) => {
            this.handleRouting(url);
        });

    }

    ngOnInit() {

    }


    handleRouting(url: string) {
        // Assume everything after :// is an app route
        // in production you might want to limit which routes are allowed to deep-link
        const route = url;
        console.log(`AppComponent: Navigate to route '${route}'`);

        // Do the routing in the Angular Zone on next tick,
        // to ensure that we're in the right context and router is ready.
       /* setTimeout(() => {
            this.zone.run(() => {
                this.routerExt.navigateByUrl(route);
            });
        });*/
    }

}


