import {Component, Input} from '@angular/core';

@Component({selector: 'pc-remarks', templateUrl: 'remarks.component.html'})

export class RemarksComponent {
  @Input() remarks;
}
