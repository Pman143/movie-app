import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'movie-app';
  subscriptions: Subscription[] = [];

  constructor(private swUpdate: SwUpdate) {
    console.log(this.swUpdate.isEnabled);
    if (this.swUpdate.isEnabled) {
      this.swUpdate
        .checkForUpdate()
        .then((res) => {
          console.log('Response ' + res);
        })
        .catch((error) => {
          console.error('Could not check for app updates', error);
        });
    }
  }
}
