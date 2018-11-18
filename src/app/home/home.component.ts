import {Component, Input} from '@angular/core';

@Component(
    {selector: 'pc-home', templateUrl: 'home.component.html', styleUrls: ['home.component.scss']})
export class HomeComponent {
  @Input() data;
}
