import {Component, Input} from '@angular/core';
import * as data from '../../../data/data.json';

@Component(
    {selector: 'pc-home', templateUrl: 'home.component.html', styleUrls: ['home.component.scss']})
export class HomeComponent {
  @Input() data = data;
}
