import {Component, Input} from '@angular/core';

@Component({selector: 'dc-call-button', templateUrl: 'call-button.component.html'})

export class CallButtonComponent {
  @Input() number: number;
}
