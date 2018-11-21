import {Component, Input} from '@angular/core';

@Component({
  selector: 'dc-remarks',
  templateUrl: 'remarks.component.html',
  styleUrls: ['remarks.component.scss']
})

export class RemarksComponent {
  @Input() remarks;
}
