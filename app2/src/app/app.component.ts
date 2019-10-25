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

}
