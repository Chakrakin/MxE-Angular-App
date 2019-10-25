import {ChangeDetectorRef, Component, NgZone} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
    selector: 'app1-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app1';
    // @ts-ignore
    assetsBase = __webpack_public_path__;

    constructor(public router: Router, public cd: ChangeDetectorRef, public ngZone: NgZone) {
        this.router.events.pipe(filter(e => e instanceof NavigationEnd))
            .subscribe((e: NavigationEnd) => this.ngZone.run(() => this.cd.detectChanges()));
    }
}
