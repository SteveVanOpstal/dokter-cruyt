import {Component, Input} from '@angular/core';

@Component({selector: 'dc-appointment-button', templateUrl: 'appointment-button.component.html'})

export class AppointmentButtonComponent {
  @Input() link;
}
