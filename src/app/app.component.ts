import {Component} from '@angular/core';
import {IconService} from './services/icon.service';

@Component(
    {selector: 'dc-root', templateUrl: './app.component.html', styleUrls: ['./app.component.scss']})
export class AppComponent {
  constructor(public icons: IconService) {}
}
