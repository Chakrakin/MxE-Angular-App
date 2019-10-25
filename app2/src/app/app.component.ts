import {ChangeDetectorRef, Component, NgZone, OnDestroy} from '@angular/core';
import {filter} from 'rxjs/operators';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2';

  constructor(public router: Router, public cd: ChangeDetectorRef, public ngZone: NgZone) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
        .subscribe((e: NavigationEnd) => this.ngZone.run(() => this.cd.detectChanges()));
  }
}
