import {Injectable} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({providedIn: 'root'})
export class IconService {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'call', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/call.svg'));
    iconRegistry.addSvgIcon(
        'open_in_new', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/open_in_new.svg'));
  }
}
