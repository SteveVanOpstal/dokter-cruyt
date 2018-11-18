import {Component} from '@angular/core';
import * as data from '../../data/data.json';
import {IconService} from './services/icon.service';

@Component({
  selector: 'pc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = data;

  constructor(public icons: IconService) {}
}
