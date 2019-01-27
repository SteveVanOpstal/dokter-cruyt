import {Component} from '@angular/core';
import {IconService} from './services/icon.service';

@Component({selector: 'dc-root', templateUrl: './app.component.html'})
export class AppComponent {
  constructor(public icons: IconService) {}
}
