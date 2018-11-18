import { Component, Input } from '@angular/core';

@Component({
  selector: 'pc-appointment-button',
  templateUrl: 'appointment-button.component.html'
})

export class AppointmentButtonComponent {
  @Input() link;
}
