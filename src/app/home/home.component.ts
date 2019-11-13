import {Component, Input} from '@angular/core';

import data from '../../../data.json';

@Component(
    {selector: 'dc-home', templateUrl: 'home.component.html', styleUrls: ['home.component.scss']})
export class HomeComponent {
  @Input() data = data;
}
